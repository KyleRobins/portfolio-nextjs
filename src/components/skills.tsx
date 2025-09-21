"use client";

import { skills } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <Section id="skills" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <SectionHeading eyebrow="Toolbox" label="Skills & Platforms" />
      <SectionDescription>Tools, languages, and platforms I rely on to deliver robust infrastructure, performant applications, and polished experiences.</SectionDescription>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <Card className="h-full border-border/60 bg-background/70 backdrop-blur">
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.skills.length} tools I use frequently
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-background/60 p-3 text-center transition hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
