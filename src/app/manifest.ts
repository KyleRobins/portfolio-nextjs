import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kyle Robins · DevOps & Full Stack Engineer",
    short_name: "Kyle Robins",
    description:
      "Portfolio for Kyle Robins, a DevOps and full-stack engineer in Nairobi, Kenya crafting resilient infrastructure and delightful digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#13201b",
    theme_color: "#13201b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
