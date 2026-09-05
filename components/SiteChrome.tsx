"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { LightboxProvider } from "@/components/Lightbox";
import { WhatsAppChatButton } from "@/components/WhatsAppChatButton";

const Menu = dynamic(
  () => import("@/components/Menu").then((mod) => mod.Menu),
  { ssr: false },
);
const PriceGuidelineSlideIn = dynamic(
  () =>
    import("@/components/PriceGuidelineSlideIn").then(
      (mod) => mod.PriceGuidelineSlideIn,
    ),
  { ssr: false },
);

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <LightboxProvider>
      <Header open={open} onToggle={() => setOpen((value) => !value)} />
      <Menu open={open} onClose={() => setOpen(false)} />
      {children}
      <PriceGuidelineSlideIn />
      <WhatsAppChatButton />
    </LightboxProvider>
  );
}
