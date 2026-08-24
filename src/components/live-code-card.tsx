"use client";

import { useEffect, useRef, useState } from "react";
import { SquareTerminal } from "lucide-react";

const monoFontStyle = {
  fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
};

const colors = {
  keyword: "#569CD6",
  variable: "#DCDCAA",
  property: "#9CDCFE",
  string: "#CE9178",
  default: "#D4D4D4",
  muted: "#7A8B99",
  success: "#89D185",
  info: "#4FC1FF",
};

type Token = { text: string; color: string };
type Line = Token[];

const kw = (text: string): Token => ({ text, color: colors.keyword });
const id = (text: string): Token => ({ text, color: colors.variable });
const prop = (text: string): Token => ({ text, color: colors.property });
const str = (text: string): Token => ({ text, color: colors.string });
const plain = (text: string): Token => ({ text, color: colors.default });
const muted = (text: string): Token => ({ text, color: colors.muted });
const ok = (text: string): Token => ({ text, color: colors.success });
const info = (text: string): Token => ({ text, color: colors.info });

type Snippet = {
  fileName: string;
  lines: Line[];
  contextIcon: string;
  contextLabel: Token[];
  command: Line;
  output: Line[];
};

const snippets: Snippet[] = [
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
    contextIcon: "⎈",
    contextLabel: [muted("minikube"), plain("(default)")],
    command: [plain("kubectl apply -f "), str("k8s/deployment.yaml")],
    output: [
      [ok("deployment.apps/portfolio-api"), muted(" created")],
      [ok("service/portfolio-api"), muted(" exposed")],
      [info("✓"), plain(" rollout complete "), muted("— 3/3 pods Running")],
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
    contextIcon: "▲",
    contextLabel: [muted("~/portfolio-nextjs"), plain(" (main)")],
    command: [plain("pnpm build "), muted("&&"), plain(" vercel --prod")],
    output: [
      [ok("✓"), plain(" Compiled successfully "), muted("in 4.2s")],
      [ok("✓"), plain(" Static pages generated "), muted("(7/7)")],
      [info("✓"), plain(" Deployed to production "), muted("— kylerobins.com")],
    ],
  },
];

const TYPE_DELAY_MIN = 18;
const TYPE_DELAY_MAX = 46;
const NEWLINE_DELAY = 180;
const CODE_HOLD_DELAY = 550;
const RUN_DELAY = 550;
const OUTPUT_LINE_DELAY = 220;
const OUTPUT_HOLD_DELAY = 2400;
const CLEAR_DELAY = 500;

type Phase = "typing-code" | "holding-code" | "typing-cmd" | "running" | "output" | "holding-output" | "clearing";

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

const PANEL_TABS = ["Problems", "Output", "Debug Console", "Terminal", "Ports"];

export function LiveCodeCard() {
  const reducedMotion = usePrefersReducedMotion();
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [cmdCharIdx, setCmdCharIdx] = useState(0);
  const [outputLineIdx, setOutputLineIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-code");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const snippet = snippets[snippetIdx];
    const currentLine = snippet.lines[lineIdx];

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    if (phase === "typing-code") {
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
        schedule(() => setPhase("holding-code"), 120);
      }
    } else if (phase === "holding-code") {
      schedule(() => setPhase("typing-cmd"), CODE_HOLD_DELAY);
    } else if (phase === "typing-cmd") {
      const total = lineLength(snippet.command);
      if (cmdCharIdx < total) {
        schedule(() => setCmdCharIdx((c) => c + 1), TYPE_DELAY_MIN + Math.random() * (TYPE_DELAY_MAX - TYPE_DELAY_MIN));
      } else {
        schedule(() => setPhase("running"), 200);
      }
    } else if (phase === "running") {
      schedule(() => setPhase("output"), RUN_DELAY);
    } else if (phase === "output") {
      if (outputLineIdx < snippet.output.length) {
        schedule(() => setOutputLineIdx((l) => l + 1), OUTPUT_LINE_DELAY);
      } else {
        schedule(() => setPhase("holding-output"), 150);
      }
    } else if (phase === "holding-output") {
      schedule(() => setPhase("clearing"), OUTPUT_HOLD_DELAY);
    } else {
      schedule(() => {
        setSnippetIdx((s) => (s + 1) % snippets.length);
        setLineIdx(0);
        setCharIdx(0);
        setCmdCharIdx(0);
        setOutputLineIdx(0);
        setPhase("typing-code");
      }, CLEAR_DELAY);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, charIdx, lineIdx, cmdCharIdx, outputLineIdx, snippetIdx, reducedMotion]);

  const snippet = snippets[snippetIdx];
  const finalSnippet = snippets[0];
  const isClearing = phase === "clearing" && !reducedMotion;
  const codeDone = reducedMotion || (phase !== "typing-code" && !isClearing);
  const terminalActive = reducedMotion || (!isClearing && phase !== "typing-code" && phase !== "holding-code");
  const commandDone = reducedMotion || (terminalActive && phase !== "typing-cmd");
  const outputVisible = reducedMotion || phase === "output" || phase === "holding-output";

  return (
    <div className="absolute inset-0 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground dark:text-slate-400 font-sans">
          {reducedMotion ? finalSnippet.fileName : snippet.fileName}
        </div>
      </div>

      <div className="flex-shrink-0 overflow-hidden">
        <div className="space-y-0" style={monoFontStyle}>
          {(() => {
            const activeLines = reducedMotion ? finalSnippet.lines : snippet.lines;
            const visibleCount = isClearing ? 0 : codeDone ? activeLines.length : lineIdx + 1;
            return Array.from({ length: visibleCount });
          })().map((_, i) => {
            const activeLines = reducedMotion ? finalSnippet.lines : snippet.lines;
            const isPastLine = i < lineIdx || codeDone;
            const isActiveLine = i === lineIdx && !codeDone;
            const sourceLine = activeLines[i];
            const tokens = isPastLine ? sourceLine : isActiveLine ? sliceLine(sourceLine, charIdx) : null;

            return (
              <div key={i} className="flex items-start">
                <span
                  className="w-7 text-[#6A9955] text-[13px] pr-2 flex-shrink-0 select-none opacity-60"
                  style={monoFontStyle}
                >
                  {tokens ? String(i + 1).padStart(2, "0") : ""}
                </span>
                <div className="text-[13px] leading-[19px] flex-1" style={monoFontStyle}>
                  {tokens?.map((token, ti) => (
                    <span key={ti} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                  {isActiveLine ? (
                    <span className="cursor-blink inline-block w-[2px] h-[13px] -mb-[1px] ml-[1px] bg-[#AEAFAD]" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-white/10 mt-2 pt-2 font-sans">
        <div className="flex items-center gap-4 px-1 mb-2 overflow-hidden">
          {PANEL_TABS.map((tab) => (
            <span
              key={tab}
              className={
                tab === "Terminal"
                  ? "text-[11px] font-medium text-primary border-b-2 border-primary pb-1 whitespace-nowrap"
                  : "text-[11px] text-slate-500 pb-1 whitespace-nowrap"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="rounded-lg bg-black/20 px-3 py-2" style={monoFontStyle}>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
            <SquareTerminal className="h-3 w-3 text-[#4FC1FF]" />
            <span className="text-[#4FC1FF]">kyle-mbp</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="text-[#DCDCAA]">kylerobins</span>
            <span className="text-slate-600">via</span>
            <span>{(reducedMotion ? finalSnippet : snippet).contextIcon}</span>
            {(reducedMotion ? finalSnippet : snippet).contextLabel.map((token, i) => (
              <span key={i} style={{ color: token.color }}>
                {token.text}
              </span>
            ))}
          </div>

          <div className="text-[13px] leading-[19px]">
            <span className="text-primary mr-1.5">❯</span>
            {commandDone
              ? snippet.command.map((token, i) => (
                  <span key={i} style={{ color: token.color }}>
                    {token.text}
                  </span>
                ))
              : sliceLine(snippet.command, cmdCharIdx).map((token, i) => (
                  <span key={i} style={{ color: token.color }}>
                    {token.text}
                  </span>
                ))}
            {phase === "typing-cmd" && !reducedMotion ? (
              <span className="cursor-blink inline-block w-[2px] h-[13px] -mb-[1px] ml-[1px] bg-[#AEAFAD]" />
            ) : null}
          </div>

          {outputVisible ? (
            <div className="mt-1 space-y-0.5">
              {snippet.output.slice(0, reducedMotion ? snippet.output.length : outputLineIdx).map((line, li) => (
                <div key={li} className="text-[12px] leading-[17px]">
                  {line.map((token, ti) => (
                    <span key={ti} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                </div>
              ))}
              {phase === "holding-output" || reducedMotion ? (
                <div className="text-[13px] leading-[19px] pt-0.5">
                  <span className="text-primary mr-1.5">❯</span>
                  {!reducedMotion ? <span className="cursor-blink inline-block w-[2px] h-[13px] -mb-[1px] bg-[#AEAFAD]" /> : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
