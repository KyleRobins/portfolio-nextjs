import type { Metadata } from "next";
import { AboutSection } from "@/components/about";

export const metadata: Metadata = {
  title: "About Kyle Robins · DevOps & Full-Stack Engineer in Nairobi, Kenya",
  description:
    "Nairobi-based DevOps and full-stack engineer shipping resilient cloud infrastructure, delightful user experiences, and community-first knowledge sharing.",
  alternates: { canonical: "https://kylerobins.com/about" },
  openGraph: {
    title: "About Kyle Robins",
    description:
      "Nairobi-based DevOps and full-stack engineer shipping resilient cloud infrastructure, delightful user experiences, and community-first knowledge sharing.",
    url: "https://kylerobins.com/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
