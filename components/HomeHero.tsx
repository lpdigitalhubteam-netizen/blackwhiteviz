"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeHeroCopy, homeHeroSlides } from "@/lib/home";

const ease = [0.22, 1, 0.36, 1] as const;
const HOLD_MS = 5200;

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  const flip = direction === "prev" ? "-scale-x-100" : "";

  return (
    <span className={`relative flex h-10 w-10 items-center justify-center md:h-16 md:w-16 ${flip}`}>
      <span className="absolute top-1/2 left-1 h-px w-0 origin-left bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500 ease-out group-hover:w-8" />
      <svg
        width="36"
        height="56"
        viewBox="0 0 36 56"
        fill="none"
        aria-hidden
        className="relative h-9 w-6 md:h-14 md:w-9"
      >
        <path
          d="M4 6l20 22L4 50"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-35 transition-opacity duration-300 group-hover:opacity-70"
        />
        <path
          d="M14 6l20 22-20 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 ease-out group-hover:translate-x-1"
        />
      </svg>
    </span>
  );
}

export function HomeHero() {
  const total = homeHeroSlides.length;
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const safeIndex = ((index % total) + total) % total;
  const slide = homeHeroSlides[safeIndex];

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
      setTick((value) => value + 1);
    },
    [total],
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [index, total]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, [tick, total]);

  return (
    <section className="relative bg-background md:h-[100svh] md:min-h-[36rem] md:overflow-hidden">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black md:absolute md:inset-0 md:aspect-auto">
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
              initial={{ scale: desktop ? 1.08 : 1 }}
              animate={{ scale: 1 }}
              transition={{
                duration: desktop ? HOLD_MS / 1000 : 0,
                ease: "linear",
              }}
            >
              <Image
                src={encodeURI(slide.src)}
                alt={slide.alt}
                fill
                priority={safeIndex === 0}
                sizes="100vw"
                className="object-contain md:object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-20 bg-gradient-to-b from-black/55 to-transparent md:h-40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-black/80 via-black/40 to-transparent md:h-1/2 md:from-black/70 md:via-black/35" />

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(safeIndex - 1)}
          className="group absolute top-1/2 left-0.5 z-[3] -translate-y-1/2 bg-transparent p-1 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] md:left-3"
        >
          <ArrowIcon direction="prev" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(safeIndex + 1)}
          className="group absolute top-1/2 right-0.5 z-[3] -translate-y-1/2 bg-transparent p-1 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] md:right-3"
        >
          <ArrowIcon direction="next" />
        </button>

        <div className="absolute right-0 bottom-0 left-0 z-[2] px-4 pb-3 md:px-8 md:pb-16 lg:px-10">
          <motion.h1
            className="font-display text-[1.7rem] leading-[1.05] font-semibold tracking-tight text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] md:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
          >
            <span className="block">{slide.lines[0]}</span>
            {slide.lines[1] ? (
              <span className="block text-white/55">{slide.lines[1]}</span>
            ) : null}
          </motion.h1>

          <div className="mt-1.5 flex flex-row items-end justify-between gap-3 md:mt-4 md:gap-8">
            <div className="min-w-0 max-w-4xl flex-1">
              <motion.p
                className="max-w-2xl text-[13px] leading-snug text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] md:text-base md:leading-relaxed md:text-white/75"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
              >
                {slide.paragraph}
              </motion.p>
              <motion.div
                className="mt-8 hidden md:block"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease }}
              >
                <Link
                  href={homeHeroCopy.cta.href}
                  className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-black/55 px-6 py-3 text-[11px] tracking-[0.22em] text-white uppercase shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                >
                  {homeHeroCopy.cta.label}
                  <span aria-hidden className="text-sm leading-none">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            <div className="sr-only">
              {homeHeroSlides.map((s) => (
                <div key={s.src}>
                  <div>{s.title}</div>
                  <div>{s.paragraph}</div>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 flex-col items-end gap-1.5 pb-0.5 text-right md:gap-3 md:pb-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={slide.title}
                  className="max-w-[7.5rem] text-[8px] leading-tight tracking-[0.18em] text-white/60 uppercase md:max-w-none md:text-[10px] md:tracking-[0.28em] md:text-white/55"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {slide.title}
                </motion.p>
              </AnimatePresence>
              <div className="flex gap-1.5 md:gap-2">
                {homeHeroSlides.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    onClick={() => goTo(i)}
                    className={`h-px transition-all duration-500 ${
                      i === safeIndex
                        ? "w-6 bg-white md:w-8"
                        : "w-2.5 bg-white/35 hover:bg-white/60 md:w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5 pb-2 md:hidden">
        <Link
          href={homeHeroCopy.cta.href}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-white/20"
        >
          {homeHeroCopy.cta.label}
          <span aria-hidden className="text-sm leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
