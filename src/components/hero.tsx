"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, GitGraph, Github, Linkedin, Mail, MapPin, Mic, Trophy } from "lucide-react";
import Link from "next/link";

import { bio } from "@/lib/data";
import { Button } from "@/components/ui/button";

const monoFontStyle = {
  fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace"
};

// VS Code Dark Theme Colors
const vscodeColors = {
  keyword: "#569CD6",      // blue for const, async, return, await
  variable: "#DCDCAA",     // yellow for variables and functions
  property: "#9CDCFE",     // light blue for object properties
  string: "#CE9178",       // orange for strings
  default: "#D4D4D4"       // light gray for default text
};

const codeLines = [
  {
    number: "01",
    content: (
      <div className="text-sm leading-relaxed" style={monoFontStyle}>
        <span style={{ color: `${vscodeColors.keyword} !important` }}>const</span>
        <span style={{ color: `${vscodeColors.variable} !important`, marginLeft: "8px" }}>devopsEngineer</span>
        <span style={{ color: `${vscodeColors.default} !important`, marginLeft: "8px" }}>=</span>
        <span style={{ color: `${vscodeColors.default} !important`, marginLeft: "8px" }}>{"{"}</span>
      </div>
    ),
  },
  {
    number: "02",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.property }}>name</span>
        <span style={{ color: vscodeColors.default }}>:</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;Kyle Robins&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
      </div>
    ),
  },
  {
    number: "03",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.property }}>role</span>
        <span style={{ color: vscodeColors.default }}>:</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;DevOps Engineer&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
      </div>
    ),
  },
  {
    number: "04",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.property }}>company</span>
        <span style={{ color: vscodeColors.default }}>:</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;Elitcorp Ltd&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
      </div>
    ),
  },
  {
    number: "05",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.property }}>skills</span>
        <span style={{ color: vscodeColors.default }}>:</span>
        <span style={{ color: vscodeColors.default, marginLeft: "8px" }}>[</span>
      </div>
    ),
  },
  {
    number: "06",
    content: (
      <div className="text-sm leading-relaxed pl-8" style={monoFontStyle}>
        <span style={{ color: vscodeColors.string }}>&apos;React&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;TypeScript&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;Node.js&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
      </div>
    ),
  },
  {
    number: "07",
    content: (
      <div className="text-sm leading-relaxed pl-8" style={monoFontStyle}>
        <span style={{ color: vscodeColors.string }}>&apos;Docker&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;Kubernetes&apos;</span>
        <span style={{ color: vscodeColors.default }}>,</span>
        <span style={{ color: vscodeColors.string, marginLeft: "8px" }}>&apos;AWS&apos;</span>
      </div>
    ),
  },
  {
    number: "08",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.default }}>],</span>
      </div>
    ),
  },
  {
    number: "09",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.property }}>getProjects</span>
        <span style={{ color: vscodeColors.default }}>:</span>
        <span style={{ color: vscodeColors.keyword, marginLeft: "8px" }}>async</span>
        <span style={{ color: vscodeColors.default, marginLeft: "8px" }}>() =&gt;</span>
        <span style={{ color: vscodeColors.default, marginLeft: "8px" }}>{"{"}</span>
      </div>
    ),
  },
  {
    number: "10",
    content: (
      <div className="text-sm leading-relaxed pl-8" style={monoFontStyle}>
        <span style={{ color: vscodeColors.keyword }}>return</span>
        <span style={{ color: vscodeColors.keyword, marginLeft: "8px" }}>await</span>
        <span style={{ color: vscodeColors.variable, marginLeft: "8px" }}>fetchProjects</span>
        <span style={{ color: vscodeColors.default }}>();</span>
      </div>
    ),
  },
  {
    number: "11",
    content: (
      <div className="text-sm leading-relaxed pl-4" style={monoFontStyle}>
        <span style={{ color: vscodeColors.default }}>{"}"}</span>
        <span style={{ color: vscodeColors.default }}>,</span>
      </div>
    ),
  },
  {
    number: "12",
    content: (
      <div className="text-sm leading-relaxed" style={monoFontStyle}>
        <span style={{ color: vscodeColors.default }}>{"}"}</span>
        <span style={{ color: vscodeColors.default }}>;</span>
      </div>
    ),
  },
];

const achievements = [
  {
    icon: <GitGraph className="h-5 w-5" />,
    value: "1.1K Commits",
    label: "Shipped to Production",
    border: "border-[#4c8066]/60",
    background: "from-[#285c45]/95 via-[#1f4d3b]/85 to-[#285c45]/95",
  },
  {
    icon: <Github className="h-5 w-5" />,
    value: "128M+",
    label: "Lines of Code Written",
    border: "border-[#3b6652]/55",
    background: "from-[#214b39]/95 via-[#183a2d]/85 to-[#214b39]/95",
  },
  {
    icon: <Mic className="h-5 w-5" />,
    value: "4",
    label: "Speaking Events",
    border: "border-[#8ebaa2]/60",
    background: "from-[#2b4439]/92 via-[#20352d]/82 to-[#2b4439]/92",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    value: "Software Craft",
    label: "Built Resilient Systems",
    border: "border-[#f59e0b]/60",
    background: "from-[#4f3214]/92 via-[#3d250d]/82 to-[#4f3214]/92",
  },
];

function useRoleRotation(roles: string[], delay = 2200) {
  const memoRoles = useMemo(() => roles, [roles]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memoRoles.length);
    }, delay);
    return () => clearInterval(interval);
  }, [memoRoles, delay]);

  return memoRoles[index];
}

export function Hero() {
  const role = useRoleRotation(bio.roles);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
  };

  const handleCalendlyClick = (event: React.MouseEvent) => {
    createRipple(event);
    // @ts-expect-error - Calendly is loaded externally
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-expect-error - Calendly API not typed
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kylerobins/30min',
        parentElement: document.body,
        prefill: {},
        utm: {},
        customAnswers: {},
        hideEventTypeDetails: false,
        hideGdprBanner: true,
        color: '4c8066', // Primary green color
        textColor: 'ffffff', // White text
        backgroundColor: '0f1a15', // Dark background to match site
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Global mouse position for cursor effects
      setGlobalMousePosition({ x: event.clientX, y: event.clientY });

      // Local mouse position for hero section effects
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5"
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse follower effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full bg-primary/30 blur-sm"
        animate={{
          x: globalMousePosition.x - 8,
          y: globalMousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 h-8 w-8 rounded-full border border-primary/20"
        animate={{
          x: globalMousePosition.x - 16,
          y: globalMousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-primary/20"
          animate={{
            x: mousePosition.x * (100 + i * 50) + i * 60,
            y: mousePosition.y * (100 + i * 40) + i * 80,
          }}
          transition={{
            type: "spring",
            stiffness: 100 - i * 10,
            damping: 20 + i * 5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 12}%`,
          }}
        />
      ))}

      {/* Glow effect that follows mouse */}
      <motion.div
        className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: mousePosition.x * 300 - 100,
          y: mousePosition.y * 300 - 100,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex flex-1 flex-col gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-medium tracking-[0.3em] uppercase text-primary/80 backdrop-blur">
            DevOps Engineer · X · Software Engineer
          </span>
          <motion.h1
            className="text-[40px] font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
            animate={{
              y: mousePosition.y * -10,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(76, 128, 102, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {bio.name}
            </motion.span>
          </motion.h1>
          <div className="text-2xl font-medium text-muted-foreground sm:text-3xl">
            <span className="text-muted-foreground">I build</span>{" "}
            <span className="text-primary">resilient systems</span>
            <br className="hidden md:block" />
            <span className="text-muted-foreground">as a</span>{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-base font-semibold text-primary"
              >
                {role}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {bio.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative overflow-hidden"
            >
              <Button size="lg" className="gap-2 relative overflow-hidden" onClick={handleCalendlyClick}>
                <Calendar className="h-4 w-4" />
                Book a call

                {/* Ripple effects */}
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-primary/30 pointer-events-none"
                    style={{
                      left: ripple.x - 10,
                      top: ripple.y - 10,
                      width: 20,
                      height: 20,
                    }}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 20, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                ))}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative overflow-hidden"
            >
              <Button size="lg" variant="secondary" className="gap-2 relative overflow-hidden" asChild>
                <Link href={`mailto:${bio.email}`} onClick={createRipple}>
                  <Mail className="h-4 w-4" />
                  Email me

                  {/* Ripple effects */}
                  {ripples.map((ripple) => (
                    <motion.span
                      key={ripple.id}
                      className="absolute rounded-full bg-primary/20 pointer-events-none"
                      style={{
                        left: ripple.x - 10,
                        top: ripple.y - 10,
                        width: 20,
                        height: 20,
                      }}
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{ scale: 15, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  ))}
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative overflow-hidden"
            >
              <Button size="icon" variant="ghost" className="relative overflow-hidden" asChild>
                <Link href={bio.github} target="_blank" aria-label="GitHub" onClick={createRipple}>
                  <Github className="h-5 w-5" />

                  {/* Ripple effects */}
                  {ripples.map((ripple) => (
                    <motion.span
                      key={ripple.id}
                      className="absolute rounded-full bg-primary/25 pointer-events-none"
                      style={{
                        left: ripple.x - 5,
                        top: ripple.y - 5,
                        width: 10,
                        height: 10,
                      }}
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 8, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative overflow-hidden"
            >
              <Button size="icon" variant="ghost" className="relative overflow-hidden" asChild>
                <Link href={bio.linkedin} target="_blank" aria-label="LinkedIn" onClick={createRipple}>
                  <Linkedin className="h-5 w-5" />

                  {/* Ripple effects */}
                  {ripples.map((ripple) => (
                    <motion.span
                      key={ripple.id}
                      className="absolute rounded-full bg-primary/25 pointer-events-none"
                      style={{
                        left: ripple.x - 5,
                        top: ripple.y - 5,
                        width: 10,
                        height: 10,
                      }}
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 8, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {bio.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> {bio.email}
            </span>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-5/12 relative">
          <div className="relative h-[400px] md:h-[500px] w-full perspective-1000">
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#112821] to-[#0b1a15] border border-[#3b6652]/40 shadow-[0_28px_70px_rgba(9,23,18,0.65)] font-sans"
              initial={{ opacity: 0, rotateY: 10, rotateX: -10, y: 20 }}
              animate={{
                opacity: 1,
                rotateY: mousePosition.x * 5 - 2.5,
                rotateX: mousePosition.y * -5 + 2.5,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-muted-foreground dark:text-slate-400 font-sans">portfolio.tsx</div>
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="space-y-0" style={{ fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace" }}>
                    {codeLines.map((line) => (
                      <div key={line.number} className="flex items-start">
                        <span className="w-8 text-[#6A9955] text-sm pr-2 flex-shrink-0 select-none opacity-60" style={{ fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace" }}>
                          {line.number}
                        </span>
                        <div className="flex-1">{line.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-sans">
                  <div className="flex items-center font-sans">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Online and coding</span>
                  </div>
                  <div>Last commit: Today</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#255941]/25 to-[#1a3b2d]/20 border border-[#4c8066]/20"
              initial={{ opacity: 0, rotateY: 15, rotateX: -15, y: 40, x: 20 }}
              animate={{
                opacity: 0.6,
                rotateY: mousePosition.x * 8 - 4,
                rotateX: mousePosition.y * -8 + 4,
                y: 20,
                x: 20,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1b3f32]/22 to-[#0f261d]/18 border border-[#3b6652]/18"
              initial={{ opacity: 0, rotateY: 20, rotateX: -20, y: 60, x: 40 }}
              animate={{
                opacity: 0.4,
                rotateY: mousePosition.x * 10 - 5,
                rotateX: mousePosition.y * -10 + 5,
                y: 40,
                x: 40,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>

          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {achievements.map((achievement, index) => {
              const positionMap: Record<number, string> = {
                0: "-top-20 left-1/2 -translate-x-1/2",
                1: "top-[56%] right-[-130px] -translate-y-1/2",
                2: "-bottom-20 left-1/2 -translate-x-1/2",
                3: "top-[48%] left-[-130px] -translate-y-1/2",
              };

              return (
                <motion.div
                  key={achievement.label}
                  className={`absolute ${positionMap[index]} w-[210px] font-sans`}
                  animate={{
                    opacity: activeAchievement === index ? 1 : 0.8,
                    scale: activeAchievement === index ? 1 : 0.95,
                    x: mousePosition.x * (5 + index * 2),
                    y: mousePosition.y * (5 + index * 2),
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  <div
                    className={`backdrop-blur-xl rounded-[20px] border ${achievement.border} bg-gradient-to-br ${achievement.background} px-4 py-3 shadow-[0_18px_40px_rgba(2,6,23,0.45)] font-sans`}
                  >
                    <div className="flex items-center gap-3 text-slate-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                        {achievement.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-semibold">
                          {achievement.value}
                        </span>
                        <span className="text-[11px] text-slate-300">
                          {achievement.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
