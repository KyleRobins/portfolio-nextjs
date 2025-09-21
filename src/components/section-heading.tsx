"use client";

import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: MotionProps["initial"] = {
  opacity: 0,
  y: 24,
};

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-24 lg:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  label,
  eyebrow,
  className,
}: {
  label: ReactNode;
  eyebrow?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={fadeUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10"
    >
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.35em] text-primary/70">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight text-foreground md:text-4xl",
          className,
        )}
      >
        {label}
      </h2>
    </motion.div>
  );
}

export function SectionDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      initial={fadeUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={cn(
        "max-w-2xl text-base text-muted-foreground md:text-lg",
        className,
      )}
    >
      {children}
    </motion.p>
  );
}
