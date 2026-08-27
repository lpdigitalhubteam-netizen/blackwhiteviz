"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <Footer />;
}
