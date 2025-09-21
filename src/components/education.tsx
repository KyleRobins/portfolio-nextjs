"use client";

import { education } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Continuous Learning" label="Education" />
      <SectionDescription>Formal education and continuing programmes that shaped my engineering foundations and leadership approach.</SectionDescription>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.08 * index, duration: 0.5, ease: "easeOut" }}
          >
            <Card className="h-full border-border/60 bg-background/70 backdrop-blur">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/60 bg-background">
                  <Image
                    src={item.img}
                    alt={item.school}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{item.school}</h3>
                  <p className="text-sm text-primary">{item.degree}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.grade ? (
                  <p className="text-sm font-semibold text-foreground">{item.grade}</p>
                ) : null}
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {item.skills ? (
                  <p className="text-xs text-muted-foreground">{item.skills}</p>
                ) : null}
                {item.doc ? (
                  <Link
                    href={item.doc}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    View Credential <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
