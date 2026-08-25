import { bio } from "@/lib/data";

const baseUrl = "https://kylerobins.com";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: bio.name,
    url: baseUrl,
    image: `${baseUrl}/images/Kyle-Robins.jpeg`,
    jobTitle: bio.roles,
    description: bio.description,
    email: `mailto:${bio.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [bio.github, bio.linkedin, bio.twitter, bio.youtube, bio.blog],
    knowsAbout: [
      "DevOps",
      "Site Reliability Engineering",
      "Terraform",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud Platform",
      "Microsoft Azure",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Ansible",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kyle Robins Portfolio",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: bio.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
