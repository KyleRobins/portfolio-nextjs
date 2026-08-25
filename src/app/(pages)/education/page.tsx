import type { Metadata } from "next";
import { EducationSection } from "@/components/education";

export const metadata: Metadata = {
  title: "Education · Kyle Robins — DevOps & Software Engineering Background",
  description:
    "Formal education and continuing programmes that shaped Kyle Robins' engineering foundations and leadership approach.",
  alternates: { canonical: "https://kylerobins.com/education" },
  openGraph: {
    title: "Education · Kyle Robins",
    description:
      "Formal education and continuing programmes that shaped Kyle Robins' engineering foundations and leadership approach.",
    url: "https://kylerobins.com/education",
  },
};

export default function EducationPage() {
  return <EducationSection />;
}
