import type { Metadata } from "next";
import { SkillsSection } from "@/components/skills";

export const metadata: Metadata = {
  title: "Skills & Tools · Kyle Robins — Terraform, Kubernetes, Docker, AWS, Next.js",
  description:
    "Tools, languages, and platforms Kyle Robins relies on to deliver robust infrastructure, performant applications, and polished experiences: Terraform, Kubernetes, Docker, AWS, Next.js, TypeScript, and more.",
  alternates: { canonical: "https://kylerobins.com/skills" },
  openGraph: {
    title: "Skills & Platforms · Kyle Robins",
    description:
      "Tools, languages, and platforms Kyle Robins relies on to deliver robust infrastructure, performant applications, and polished experiences.",
    url: "https://kylerobins.com/skills",
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
