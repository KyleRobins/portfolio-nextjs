import type { Metadata } from "next";
import { ExperienceSection } from "@/components/experience";

export const metadata: Metadata = {
  title: "Work Experience · Kyle Robins — DevOps Engineer",
  description:
    "Kyle Robins' career journey across DevOps, platform engineering, and product delivery roles at Elitcorp, E4Impact Entrepreneurship Center, and other Kenyan tech teams.",
  alternates: { canonical: "https://kylerobins.com/experience" },
  openGraph: {
    title: "Work Experience · Kyle Robins",
    description:
      "Highlights from recent roles spanning DevOps, platform engineering, and product delivery.",
    url: "https://kylerobins.com/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
