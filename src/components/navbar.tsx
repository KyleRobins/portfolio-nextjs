"use client";

import { bio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="flex w-full flex-col items-start gap-8 text-lg md:w-auto md:flex-row md:items-center md:gap-8 md:text-base">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="w-full text-left font-medium text-muted-foreground transition-colors hover:text-foreground md:w-auto"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            KR
          </div>
          <div className="hidden flex-col text-sm leading-tight sm:flex text-primary">
            <span className="font-semibold text-foreground">Kyle Robins</span>
            <span className="text-primary/70">DevOps · Full Stack</span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={bio.github} target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={bio.linkedin} target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link href={bio.resume} target="_blank">
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={bio.resume}
            target="_blank"
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
          >
            Resume
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex h-full flex-col gap-10 px-6 pb-12 pt-16"
            >
              <NavLinks />
              <div className="mt-auto flex flex-col gap-4">
                <Button variant="secondary" asChild className="gap-2">
                  <Link href={bio.github} target="_blank">
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button variant="secondary" asChild className="gap-2">
                  <Link href={bio.linkedin} target="_blank">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
