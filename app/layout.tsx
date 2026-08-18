import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Blackwhite Viz — 3D Visualization, Dubai",
    template: "%s — Blackwhite Viz",
  },
  description: site.tagline,
  icons: {
    icon: `${site.logo.src}?v=${site.logo.version}`,
    apple: `${site.logo.src}?v=${site.logo.version}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteChrome>
          <div className="flex min-h-full flex-1 flex-col">{children}</div>
          <SiteFooter />
        </SiteChrome>
      </body>
    </html>
  );
}
