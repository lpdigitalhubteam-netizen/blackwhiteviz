"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PriceGuidelineForm } from "@/components/PriceGuidelineForm";

const ease = [0.22, 1, 0.36, 1] as const;
const DISMISS_KEY = "bwv-price-slide-dismissed-v2";
const SHOW_AT_SCROLL = 0.5;

export function PriceGuidelineSlideIn() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const hideOnContact =
    pathname === "/contact" || pathname.startsWith("/contact/");

  useEffect(() => {
    const key = `${DISMISS_KEY}:${pathname}`;
    const alreadyClosed = sessionStorage.getItem(key) === "1";
    setDismissed(alreadyClosed);
    setVisible(false);

    if (alreadyClosed || hideOnContact) return;

    const reachedMiddle = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return false;
      return window.scrollY / maxScroll >= SHOW_AT_SCROLL;
    };

    const onScroll = () => {
      if (!reachedMiddle()) return;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, hideOnContact]);

  const dismiss = useCallback(() => {
    const key = `${DISMISS_KEY}:${pathname}`;
    sessionStorage.setItem(key, "1");
    setDismissed(true);
    setVisible(false);
  }, [pathname]);

  if (hideOnContact) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && !dismissed ? (
        <motion.aside
          key="price-guideline-slide-in"
          aria-labelledby="price-guideline-slide-title"
          className="pointer-events-auto hide-scrollbar fixed inset-x-4 bottom-24 z-[70] mx-auto w-auto max-w-[22rem] max-h-[calc(100dvh-8.5rem)] overflow-y-auto rounded-3xl border border-line bg-panel/95 p-5 shadow-2xl backdrop-blur-md sm:inset-x-auto sm:right-5 sm:left-auto sm:mx-0 sm:max-w-sm sm:p-7 md:max-w-md md:p-8"
          initial={{ x: "108%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "108%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close price guideline form"
            className="absolute top-4 right-4 text-xl leading-none text-muted transition-opacity hover:text-foreground"
          >
            ×
          </button>

          <div id="price-guideline-slide-title">
            <PriceGuidelineForm compact />
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
