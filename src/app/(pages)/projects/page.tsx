import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects · Kyle Robins — DevOps & Full-Stack Case Studies",
  description:
    "Case studies across logistics, fintech, content, and creative initiatives, pairing resilient infrastructure with purposeful experience design.",
  alternates: { canonical: "https://kylerobins.com/projects" },
  openGraph: {
    title: "Projects · Kyle Robins",
    description:
      "Case studies across logistics, fintech, content, and creative initiatives. Each project pairs resilient infrastructure with purposeful experience design.",
    url: "https://kylerobins.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
