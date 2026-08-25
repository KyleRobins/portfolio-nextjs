import type { MetadataRoute } from "next";

const baseUrl = "https://kylerobins.com";

const pages = [
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "certificates",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
