import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/providers/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { SectionObserverProvider } from "@/components/providers/SectionObserverProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Navbar } from "@/components/layout/Navbar";
import { PattyLauncher } from "@/components/patty/PattyLauncher";
import { SITE } from "@/content/site";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // Server-rendered with "dark" baked in so the default theme is dark
      // with zero flash, even before the init script below runs. The
      // script only ever removes this class (when a visitor previously
      // chose light), it never has to add it.
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-surface-0 text-ink-0">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <ThemeProvider>
          <LenisProvider>
            <SectionObserverProvider>
              <CommandPalette>
                <div className="bg-ambient" aria-hidden />
                <CustomCursor />
                <Navbar />
                <main className="relative w-full">{children}</main>
                <PattyLauncher />
              </CommandPalette>
            </SectionObserverProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
