import { bio } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60 mt-0 mb-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {bio.name}. Crafted with Next.js, Tailwind CSS, shadcn/ui, and a love for clean infrastructure.
        </p>
        <div className="flex items-center gap-4">
          <Link href={bio.github} target="_blank" className="transition hover:text-primary">
            GitHub
          </Link>
          <Link href={bio.linkedin} target="_blank" className="transition hover:text-primary">
            LinkedIn
          </Link>
          <Link href={bio.blog} target="_blank" className="transition hover:text-primary">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
