"use client";

import { useEffect, useRef, useState } from "react";

const monoFontStyle = {
  fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
};

const colors = {
  keyword: "#569CD6",
  variable: "#DCDCAA",
  property: "#9CDCFE",
  string: "#CE9178",
  default: "#D4D4D4",
  comment: "#6A9955",
};

type Token = { text: string; color: string };
type Line = Token[];

const kw = (text: string): Token => ({ text, color: colors.keyword });
const id = (text: string): Token => ({ text, color: colors.variable });
const prop = (text: string): Token => ({ text, color: colors.property });
const str = (text: string): Token => ({ text, color: colors.string });
const plain = (text: string): Token => ({ text, color: colors.default });

const snippets: { fileName: string; lines: Line[] }[] = [
  {
    fileName: "devops.ts",
    lines: [
      [kw("const"), id(" devopsEngineer"), plain(" = {")],
      [prop("  name"), plain(": "), str("'Kyle Robins'"), plain(",")],
      [prop("  role"), plain(": "), str("'DevOps Engineer'"), plain(",")],
      [prop("  company"), plain(": "), str("'Elitcorp Ltd'"), plain(",")],
      [prop("  skills"), plain(": [")],
      [str("    'Terraform'"), plain(", "), str("'Docker'"), plain(",")],
      [str("    'Kubernetes'"), plain(", "), str("'AWS'"), plain(",")],
      [plain("  ],")],
      [prop("  deploy"), plain(": "), kw("async"), plain(" () => {")],
      [kw("    return"), plain(" "), kw("await"), id(" provisionCluster"), plain("();")],
      [plain("  },")],
      [plain("};")],
    ],
  },
  {
    fileName: "fullstack.ts",
    lines: [
      [kw("const"), id(" fullStackEngineer"), plain(" = {")],
      [prop("  name"), plain(": "), str("'Kyle Robins'"), plain(",")],
      [prop("  role"), plain(": "), str("'Software Engineer'"), plain(",")],
      [prop("  focus"), plain(": "), str("'Full-stack delivery'"), plain(",")],
      [prop("  stack"), plain(": [")],
      [str("    'TypeScript'"), plain(", "), str("'Next.js'"), plain(",")],
      [str("    'PostgreSQL'"), plain(", "), str("'Supabase'"), plain(",")],
      [plain("  ],")],
      [prop("  shipFeature"), plain(": "), kw("async"), id(" (idea)"), plain(" => {")],
      [kw("    return"), plain(" "), kw("await"), id(" deploy"), plain("("), id("build"), plain("(idea));")],
      [plain("  },")],
      [plain("};")],
    ],
  },
];

const MAX_LINES = Math.max(...snippets.map((s) => s.lines.length));
const TYPE_DELAY_MIN = 18;
const TYPE_DELAY_MAX = 46;
const NEWLINE_DELAY = 180;
const HOLD_DELAY = 2600;
const CLEAR_DELAY = 450;

function lineLength(line: Line) {
  return line.reduce((sum, token) => sum + token.text.length, 0);
}

function sliceLine(line: Line, budget: number): Line {
  const result: Line = [];
  let remaining = budget;
  for (const token of line) {
    if (remaining <= 0) break;
    if (token.text.length <= remaining) {
      result.push(token);
      remaining -= token.text.length;
    } else {
      result.push({ text: token.text.slice(0, remaining), color: token.color });
      remaining = 0;
    }
  }
  return result;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function LiveCodeCard() {
  const reducedMotion = usePrefersReducedMotion();
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "clearing">("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const snippet = snippets[snippetIdx];
    const currentLine = snippet.lines[lineIdx];

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    if (phase === "typing") {
      const total = lineLength(currentLine);
      if (charIdx < total) {
        const burst = Math.random() < 0.18 ? 2 : 1;
        schedule(() => setCharIdx((c) => Math.min(c + burst, total)), TYPE_DELAY_MIN + Math.random() * (TYPE_DELAY_MAX - TYPE_DELAY_MIN));
      } else if (lineIdx < snippet.lines.length - 1) {
        schedule(() => {
          setLineIdx((l) => l + 1);
          setCharIdx(0);
        }, NEWLINE_DELAY);
      } else {
        schedule(() => setPhase("holding"), 120);
      }
    } else if (phase === "holding") {
      schedule(() => setPhase("clearing"), HOLD_DELAY);
    } else {
      schedule(() => {
        setSnippetIdx((s) => (s + 1) % snippets.length);
        setLineIdx(0);
        setCharIdx(0);
        setPhase("typing");
      }, CLEAR_DELAY);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, charIdx, lineIdx, snippetIdx, reducedMotion]);

  const snippet = snippets[snippetIdx];
  const finalSnippet = snippets[0];
  const isClearing = phase === "clearing" && !reducedMotion;

  return (
    <div className="absolute inset-0 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground dark:text-slate-400 font-sans">
          {reducedMotion ? finalSnippet.fileName : snippet.fileName}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="space-y-0" style={monoFontStyle}>
          {Array.from({ length: MAX_LINES }).map((_, i) => {
            const activeLines = reducedMotion ? finalSnippet.lines : snippet.lines;
            const isPastLine = !isClearing && (i < lineIdx || reducedMotion);
            const isActiveLine = !isClearing && i === lineIdx && !reducedMotion;
            const sourceLine = activeLines[i];

            if (!sourceLine) {
              return <div key={i} className="h-[21px]" aria-hidden />;
            }

            const tokens = isPastLine ? sourceLine : isActiveLine ? sliceLine(sourceLine, charIdx) : null;

            return (
              <div key={i} className="flex items-start">
                <span
                  className="w-8 text-[#6A9955] text-sm pr-2 flex-shrink-0 select-none opacity-60"
                  style={monoFontStyle}
                >
                  {tokens ? String(i + 1).padStart(2, "0") : ""}
                </span>
                <div className="text-sm leading-relaxed flex-1" style={monoFontStyle}>
                  {tokens?.map((token, ti) => (
                    <span key={ti} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                  {isActiveLine ? (
                    <span className="cursor-blink inline-block w-[2px] h-[14px] -mb-[2px] ml-[1px] bg-[#AEAFAD]" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-sans">
        <div className="flex items-center font-sans">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
          <span>Online and coding</span>
        </div>
        <div>Last commit: Today</div>
      </div>
    </div>
  );
}
