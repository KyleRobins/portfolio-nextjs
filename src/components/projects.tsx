"use client";

import { projects } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Selected Work" label="Projects" />
      <SectionDescription>Case studies across logistics, fintech, content, and creative initiatives. Each project pairs resilient infrastructure with purposeful experience design.</SectionDescription>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
          >
            <Card className="group h-full overflow-hidden border-border/50 bg-background/70 backdrop-blur transition hover:border-primary/40">
              <CardHeader className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-border/40 bg-background/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {project.date} · {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-border/50 bg-background/60 text-xs text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3">
                {project.webapp ? (
                  <Link
                    href={project.webapp.startsWith("http") ? project.webapp : `https://${project.webapp}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4" /> Visit site
                  </Link>
                ) : null}
                {project.view ? (
                  <Link
                    href={project.view}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4" /> View work
                  </Link>
                ) : null}
                {project.github && project.github !== "#" ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Source
                  </Link>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
