import type { Metadata } from "next";
import { CertificatesSection } from "@/components/certificates";

export const metadata: Metadata = {
  title: "Certifications · Kyle Robins — Google Cloud, AWS, IBM",
  description:
    "Industry certifications and cloud badges earned by Kyle Robins from Google Cloud, Amazon Web Services, and IBM SkillsBuild.",
  alternates: { canonical: "https://kylerobins.com/certificates" },
  openGraph: {
    title: "Certifications · Kyle Robins",
    description:
      "Industry certifications and cloud badges earned along the journey.",
    url: "https://kylerobins.com/certificates",
  },
};

export default function CertificatesPage() {
  return <CertificatesSection />;
}
