"use client";

import { experiences } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Career Journey" label="Experience" />
      <SectionDescription>
        Highlights from recent roles spanning DevOps, platform engineering, and product delivery.
      </SectionDescription>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
          >
            <Card className="h-full border-border/60 bg-background/60 backdrop-blur">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/60 bg-background">
                  <Image
                    src={item.img}
                    alt={item.company}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                  {item.role ? (
                    <p className="text-sm text-primary">{item.role}</p>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-primary/40 bg-primary/5 text-xs font-medium text-primary">
                      {skill}
                    </Badge>
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
