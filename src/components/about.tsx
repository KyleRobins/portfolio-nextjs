"use client";

import { bio, timeline } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Profile" label="About" />
      <SectionDescription>
        Nairobi-based DevOps and full-stack engineer shipping resilient cloud infrastructure, delightful user experiences, and community-first knowledge sharing.
      </SectionDescription>
      <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-border/40 bg-background/70 p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold text-foreground">What I do</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            I architect automated cloud environments, build scalable web products, and champion developer experience. From Terraform blueprints to TypeScript design systems, I help teams ship faster with confidence.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-primary/90">
                Focus Areas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Infrastructure as Code & Platform Ops</li>
                <li>Full-stack product delivery</li>
                <li>Dev enablement & documentation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#3b6652]/40 bg-[#1f3b31]/50 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
                Communities
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Speaking events · 10+ engagements</li>
                <li>Technical writing at blog.kylerobins.com</li>
                <li>Mentorship & DevRel partnerships</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <Card className="border-border/40 bg-background/70 backdrop-blur">
            <CardContent className="space-y-2 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Quick facts
              </p>
              <p className="text-sm text-muted-foreground">
                {bio.roles[0]} · {bio.roles[1]} · {bio.roles[2]}
              </p>
              <p className="text-sm text-muted-foreground">Based in {bio.location}</p>
              <p className="text-sm text-muted-foreground">Writing at {bio.blog.replace('https://', '')}</p>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-background/70 backdrop-blur">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Timeline
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {timeline.map((item) => (
                  <li key={item.year} className="flex items-start gap-3">
                    <span className="font-semibold text-primary">{item.year}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
