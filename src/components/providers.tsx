"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggleFab } from "@/components/theme-toggle-fab";
import { ScrollToTopFab } from "@/components/scroll-to-top-fab";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ScrollToTopFab />
      <ThemeToggleFab />
    </ThemeProvider>
  );
}
