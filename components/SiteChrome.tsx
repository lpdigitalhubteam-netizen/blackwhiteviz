"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { LightboxProvider } from "@/components/Lightbox";
import { Menu } from "@/components/Menu";

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
    </LightboxProvider>
  );
}
