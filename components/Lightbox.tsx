"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxItem = {
  src: string;
  alt: string;
};

const LightboxContext = createContext<{
  show: (item: LightboxItem) => void;
} | null>(null);

export function useLightbox() {
  const value = useContext(LightboxContext);
  if (!value) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return value;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const show = useCallback((next: LightboxItem) => setItem(next), []);
  const hide = useCallback(() => setItem(null), []);
  const value = useMemo(() => ({ show }), [show]);

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, hide]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {item ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={hide}
          >
            <button
              type="button"
              onClick={hide}
              aria-label="Close image"
              className="absolute top-4 right-5 z-[81] flex h-10 w-10 items-center justify-center md:top-5 md:right-8"
            >
              <span className="absolute h-px w-5 rotate-45 bg-white" />
              <span className="absolute h-px w-5 -rotate-45 bg-white" />
            </button>
            <motion.img
              src={item.src}
              alt={item.alt}
              className="max-h-[100svh] max-w-[100vw] object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
