"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/lib/faq";

const ease = [0.22, 1, 0.36, 1] as const;

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-opacity hover:opacity-80 md:py-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm font-semibold leading-snug tracking-tight uppercase md:text-base">
                {item.question}
              </span>
              <span
                className={`mt-0.5 shrink-0 text-lg leading-none text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted md:pb-6">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
