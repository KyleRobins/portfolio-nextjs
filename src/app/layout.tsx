import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Kyle Robins · DevOps & Full Stack Engineer in Nairobi, Kenya";
const description =
  "Kyle Robins is a DevOps and full-stack engineer in Nairobi, Kenya building resilient cloud infrastructure with Terraform, Kubernetes, and AWS, and delightful products with Next.js and TypeScript.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://kylerobins.com"),
  keywords: [
    "Kyle Robins",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "DevOps Engineer Nairobi",
    "DevOps Engineer Kenya",
    "Terraform",
    "Kubernetes",
    "Docker",
    "AWS",
    "CI/CD",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Kyle Robins", url: "https://kylerobins.com" }],
  creator: "Kyle Robins",
  publisher: "Kyle Robins",
  category: "technology",
  alternates: {
    canonical: "https://kylerobins.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description:
      "Explore work across DevOps, cloud architecture, and full-stack product development by Kyle Robins.",
    url: "https://kylerobins.com",
    siteName: "Kyle Robins Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@_KyleRobins",
    creator: "@_KyleRobins",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
