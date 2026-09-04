"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PriceGuidelineForm } from "@/components/PriceGuidelineForm";

const ease = [0.22, 1, 0.36, 1] as const;
// Show the form while the user is still some distance above the footer.
// Increase this number to make it appear earlier.
const BOTTOM_OFFSET_PX = 520;
const DISMISS_KEY = "bwv-price-slide-dismissed";

function isNearBottom() {
  return (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - BOTTOM_OFFSET_PX
  );
}

export function PriceGuidelineSlideIn() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const hideOnContact =
    pathname === "/contact" || pathname.startsWith("/contact/");

  useEffect(() => {
    // Persist "closed" state per page so it can appear again on other pages.
    const key = `${DISMISS_KEY}:${pathname}`;
    setDismissed(sessionStorage.getItem(key) === "1");
    setVisible(false);
  }, [pathname]);

  useEffect(() => {
    if (dismissed || hideOnContact) return;

    function onScroll() {
      // Once it appears, keep it visible until the user explicitly closes it.
      setVisible((prev) => prev || isNearBottom());
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dismissed, hideOnContact]);

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
