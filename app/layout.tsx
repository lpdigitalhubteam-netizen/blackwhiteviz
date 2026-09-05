import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteChrome } from "@/components/SiteChrome";
import { seo } from "@/lib/seo";
import { averta } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: seo.home.title,
    template: "%s",
  },
  description: seo.home.description,
  icons: {
    icon: [{ url: "/logo/favicon.webp", type: "image/webp" }],
    apple: [{ url: "/logo/favicon.webp", type: "image/webp" }],
    shortcut: "/logo/favicon.webp",
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
      className={`${averta.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`${averta.className} flex min-h-full flex-col bg-background text-foreground`}
      >
        <SiteChrome>
          <div className="flex min-h-full flex-1 flex-col">{children}</div>
          <SiteFooter />
        </SiteChrome>
      </body>
    </html>
  );
}
