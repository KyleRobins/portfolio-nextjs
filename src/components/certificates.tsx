"use client";

import { certificates } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function CertificatesSection() {
  return (
    <Section id="certificates" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(8,47,73,0.18),transparent_65%)]" />
      <SectionHeading eyebrow="Credentials" label="Certifications" />
      <SectionDescription>Industry certifications and cloud badges earned along the journey.</SectionDescription>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
          >
            <Card className="h-full border-border/50 bg-background/70 backdrop-blur">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-background/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {item.date}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary">{item.issuer}</p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Credential aligned to cloud architecture, security, and automation practices.</CardContent>
              <CardFooter>
                <Link
                  href={item.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Verify credential <ExternalLink className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
