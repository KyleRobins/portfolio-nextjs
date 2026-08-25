import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="grid-field grid-field-animated absolute inset-0 opacity-70"
          style={{ maskImage: "var(--bg-grid-mask)", WebkitMaskImage: "var(--bg-grid-mask)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,128,102,0.18),transparent_60%)]" />
        <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4c8066]/18 blur-3xl" />
        <div className="absolute right-[5%] bottom-[-18%] h-[420px] w-[420px] rounded-full bg-[#325344]/18 blur-3xl" />
      </div>
      <Navbar />
      <main className="pt-8">{children}</main>
      <nav aria-label="Explore other pages" className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Explore
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <Footer />
    </div>
  );
}
