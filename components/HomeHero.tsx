"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeHeroCopy, homeHeroSlides } from "@/lib/home";

const ease = [0.22, 1, 0.36, 1] as const;
const HOLD_MS = 5200;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = homeHeroSlides[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % homeHeroSlides.length);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[36rem] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 14%, transparent 32%), linear-gradient(to top, rgba(7,7,7,0.92) 0%, rgba(7,7,7,0.55) 28%, rgba(7,7,7,0.12) 55%, transparent 78%)",
        }}
      />

      <div className="absolute right-0 bottom-0 left-0 z-[2] flex items-end justify-between gap-8 px-5 pb-10 md:px-8 md:pb-16 lg:px-10">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 text-[10px] tracking-[0.32em] text-white/60 uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {homeHeroCopy.kicker}
          </motion.p>
          <motion.h1
            className="font-display text-4xl leading-[1.02] font-semibold tracking-tight text-white uppercase md:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
          >
            <span className="block">{homeHeroCopy.lines[0]}</span>
            <span className="block text-white/50">{homeHeroCopy.lines[1]}</span>
          </motion.h1>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
          >
            <Link
              href={homeHeroCopy.cta.href}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-white uppercase transition-opacity hover:opacity-55"
            >
              {homeHeroCopy.cta.label}
              <span aria-hidden className="text-sm leading-none">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="hidden flex-col items-end gap-3 pb-1 md:flex">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.title}
              className="text-[10px] tracking-[0.28em] text-white/55 uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {slide.title}
            </motion.p>
          </AnimatePresence>
          <div className="flex gap-2">
            {homeHeroSlides.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setIndex(i)}
                className={`h-px transition-all duration-500 ${
                  i === index ? "w-8 bg-white" : "w-3 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
