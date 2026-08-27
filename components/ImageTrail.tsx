"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeHeroSlides } from "@/lib/home";

const ease = [0.22, 1, 0.36, 1] as const;
const GAP = 64;
const LIFE_MS = 900;
const MAX = 7;

type Popup = {
  id: number;
  x: number;
  y: number;
  src: string;
  alt: string;
  rotate: number;
};

function mediaSrc(src: string) {
  return src
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : ""))
    .join("/");
}

const slides = homeHeroSlides.map((slide) => ({
  ...slide,
  src: mediaSrc(slide.src),
}));

function overNavLinks(clientX: number, clientY: number) {
  const nav = document.querySelector("[data-menu-nav]");
  if (!nav) return false;
  const el = document.elementFromPoint(clientX, clientY);
  return Boolean(el && nav.contains(el));
}

export function ImageTrail({ active }: { active: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [popups, setPopups] = useState<Popup[]>([]);
  const last = useRef({ x: -999, y: -999 });
  const seq = useRef(0);
  const img = useRef(0);
  const timers = useRef<number[]>([]);
  const raf = useRef(0);
  const pending = useRef<MouseEvent | null>(null);

  // Warm cache in the background — don’t block the trail on it
  useEffect(() => {
    if (!active) return;
    for (const slide of slides) {
      const image = new window.Image();
      image.src = slide.src;
    }
  }, [active]);

  useEffect(() => {
    if (!active) {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
      pending.current = null;
      setPopups([]);
      last.current = { x: -999, y: -999 };
      return;
    }

    function spawn(event: MouseEvent) {
      if (overNavLinks(event.clientX, event.clientY)) return;

      const box = root.current?.getBoundingClientRect();
      if (!box || box.width < 40 || box.height < 40) return;

      const distance = Math.hypot(
        event.clientX - last.current.x,
        event.clientY - last.current.y,
      );
      if (distance < GAP) return;
      last.current = { x: event.clientX, y: event.clientY };

      const slide = slides[img.current % slides.length];
      img.current += 1;
      const id = seq.current++;

      setPopups((current) => [
        ...current.slice(-(MAX - 1)),
        {
          id,
          x: event.clientX - box.left,
          y: event.clientY - box.top,
          src: slide.src,
          alt: slide.alt,
          rotate: (Math.random() - 0.5) * 14,
        },
      ]);

      const timer = window.setTimeout(() => {
        setPopups((current) => current.filter((item) => item.id !== id));
        timers.current = timers.current.filter((t) => t !== timer);
      }, LIFE_MS);
      timers.current.push(timer);
    }

    function onMove(event: MouseEvent) {
      pending.current = event;
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const next = pending.current;
        pending.current = null;
        if (next) spawn(next);
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, [active]);

  return (
    <div
      ref={root}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <AnimatePresence initial={false}>
        {popups.map((item) => (
          <motion.div
            key={item.id}
            className="absolute w-40 will-change-transform md:w-52"
            style={{ left: item.x, top: item.y }}
            initial={{
              opacity: 0,
              scale: 0.78,
              rotate: item.rotate - 6,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: item.rotate,
              x: "-50%",
              y: "-50%",
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              x: "-50%",
              y: "-50%",
            }}
            transition={{ duration: 0.22, ease }}
          >
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
