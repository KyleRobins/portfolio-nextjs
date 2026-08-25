import type { Metadata } from "next";
import { ContactSection } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Kyle Robins · DevOps Engineer in Nairobi, Kenya",
  description:
    "Get in touch with Kyle Robins for DevOps consulting, infrastructure automation, or full-stack product delivery. Available for new engagements.",
  alternates: { canonical: "https://kylerobins.com/contact" },
  openGraph: {
    title: "Contact Kyle Robins",
    description:
      "Whether you need help automating infrastructure, shipping web experiences, or speaking at community events — let's chat.",
    url: "https://kylerobins.com/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
