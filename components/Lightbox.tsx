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

export type LightboxItem = {
  src: string;
  alt: string;
};

type LightboxState = {
  items: LightboxItem[];
  index: number;
};

const LightboxContext = createContext<{
  show: (item: LightboxItem | LightboxItem[], index?: number) => void;
} | null>(null);

export function useLightbox() {
  const value = useContext(LightboxContext);
  if (!value) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return value;
}

/** Encode each path segment so spaces/names load in <img>. */
function mediaSrc(src: string) {
  return src
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : ""))
    .join("/");
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const show = useCallback(
    (item: LightboxItem | LightboxItem[], index = 0) => {
      const items = (Array.isArray(item) ? item : [item]).filter(
        (entry) => Boolean(entry?.src),
      );
      if (!items.length) return;
      setState({
        items,
        index: Math.min(Math.max(index, 0), items.length - 1),
      });
    },
    [],
  );

  const hide = useCallback(() => setState(null), []);

  const go = useCallback((delta: number) => {
    setState((current) => {
      if (!current || current.items.length < 2) return current;
      const length = current.items.length;
      return {
        ...current,
        index: (current.index + delta + length) % length,
      };
    });
  }, []);

  const value = useMemo(() => ({ show }), [show]);
  const item = state ? state.items[state.index] : null;
  const canNavigate = Boolean(state && state.items.length > 1);

  useEffect(() => {
    if (!state) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [state, hide, go]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {item ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={hide}
          >
            <button
              type="button"
              onClick={hide}
              aria-label="Close image"
              className="absolute top-4 right-5 z-[82] flex h-10 w-10 items-center justify-center md:top-5 md:right-8"
            >
              <span className="absolute h-px w-5 rotate-45 bg-white" />
              <span className="absolute h-px w-5 -rotate-45 bg-white" />
            </button>

            {canNavigate ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 z-[82] flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition-opacity hover:text-white md:left-6"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M15 5L8 12L15 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 z-[82] flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition-opacity hover:text-white md:right-6"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="absolute bottom-5 left-1/2 z-[82] -translate-x-1/2 text-[10px] tracking-[0.22em] text-white/55 uppercase">
                  {String(state!.index + 1).padStart(2, "0")} /{" "}
                  {String(state!.items.length).padStart(2, "0")}
                </p>
              </>
            ) : null}

            {/* Plain img — avoid nested opacity animations that leave a black frame */}
            <img
              key={item.src}
              src={mediaSrc(item.src)}
              alt={item.alt}
              className="relative z-[81] max-h-[100svh] max-w-[100vw] object-contain"
              onClick={(event) => event.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
