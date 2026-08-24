"use client";

import { useRef, useState } from "react";
import { projects, type Project } from "@/lib/data";
import { Section, SectionDescription, SectionHeading } from "./section-heading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y, y: tilt.x === 0 && tilt.y === 0 ? 0 : -4 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="group h-full overflow-hidden border-border/50 bg-background/70 backdrop-blur transition-colors hover:border-primary/40">
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={project.webapp.startsWith("http") ? project.webapp : `https://${project.webapp}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" /> Visit site
                </Link>
              </motion.div>
            ) : null}
            {project.view ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={project.view}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" /> View work
                </Link>
              </motion.div>
            ) : null}
            {project.github && project.github !== "#" ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Github className="h-4 w-4" /> Source
                </Link>
              </motion.div>
            ) : null}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Selected Work" label="Projects" />
      <SectionDescription>Case studies across logistics, fintech, content, and creative initiatives. Each project pairs resilient infrastructure with purposeful experience design.</SectionDescription>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
