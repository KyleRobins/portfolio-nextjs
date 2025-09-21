"use client";

import { bio } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Let&apos;s collaborate" label="Get in touch" />
      <SectionDescription>Whether you need help automating infrastructure, shipping web experiences, or speaker at community events let&apos;s chat 💬</SectionDescription>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-12"
      >
        <Card className="border-border/50 bg-background/80 backdrop-blur">
          <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Available for new engagements</p>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Let&apos;s build resilient systems together.</h3>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {bio.location}
                </span>
                <Link href="mailto:hello@kylerobins.com" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" /> {bio.email}
                </Link>
                <Link href={bio.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-primary">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button size="lg" className="gap-2" asChild>
                <Link href="mailto:hello@kylerobins.com">
                  <Mail className="h-5 w-5" /> Email Kyle
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href={bio.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5" /> Connect on LinkedIn
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={bio.github} target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={bio.twitter} target="_blank" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                      <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.386-4.096 11.6-11.6 11.6-2.304 0-4.448-.676-6.247-1.843.321.037.63.05.964.05 1.91 0 3.67-.65 5.076-1.74a4.077 4.077 0 0 1-3.81-2.832c.25.038.5.063.763.063.366 0 .732-.05 1.075-.138a4.07 4.07 0 0 1-3.262-3.99v-.05c.54.301 1.163.482 1.825.507a4.066 4.066 0 0 1-1.812-3.39c0-.75.2-1.44.553-2.04a11.558 11.558 0 0 0 8.396 4.26 4.588 4.588 0 0 1-.101-.93 4.066 4.066 0 0 1 7.03-2.78 8.01 8.01 0 0 0 2.585-.987 4.053 4.053 0 0 1-1.786 2.24 8.138 8.138 0 0 0 2.338-.64 8.756 8.756 0 0 1-2.03 2.102z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
