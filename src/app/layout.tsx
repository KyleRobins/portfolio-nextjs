import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyle Robins · DevOps & Full Stack Engineer",
  description:
    "Portfolio for Kyle Robins, a DevOps and full-stack engineer crafting resilient infrastructure and delightful digital experiences.",
  metadataBase: new URL("https://kylerobins.com"),
  openGraph: {
    title: "Kyle Robins · DevOps & Full Stack Engineer",
    description:
      "Explore work across DevOps, cloud architecture, and full-stack product development by Kyle Robins.",
    url: "https://kylerobins.com",
    siteName: "Kyle Robins Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      <body className={`${inter.variable} font-sans antialiased bg-background`}>{children}</body>
    </html>
  );
}
