"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeHeroSlides } from "@/lib/home";

const ease = [0.22, 1, 0.36, 1] as const;
const GAP = 88;
const LIFE_MS = 1000;
const MAX = 7;
const IMG_W = 240;
const IMG_H = 300;

type Popup = {
  id: number;
  x: number;
  y: number;
  src: string;
  alt: string;
  rotate: number;
};

function navRect() {
  return document.querySelector("[data-menu-nav]")?.getBoundingClientRect() ?? null;
}

function imageCoversNav(clientX: number, clientY: number) {
  const nav = navRect();
  if (!nav) return false;
  const left = clientX - IMG_W / 2;
  const right = clientX + IMG_W / 2;
  const top = clientY - IMG_H / 2;
  const bottom = clientY + IMG_H / 2;
  return !(right < nav.left || left > nav.right || bottom < nav.top || top > nav.bottom);
}

export function ImageTrail({ active }: { active: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [popups, setPopups] = useState<Popup[]>([]);
  const last = useRef({ x: -999, y: -999 });
  const seq = useRef(0);
  const img = useRef(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!active) {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
      setPopups([]);
      last.current = { x: -999, y: -999 };
      return;
    }

    function clearTrail() {
      setPopups((current) => (current.length === 0 ? current : []));
    }

    function onMove(event: MouseEvent) {
      if (imageCoversNav(event.clientX, event.clientY)) {
        clearTrail();
        last.current = { x: -999, y: -999 };
        return;
      }

      const box = root.current?.getBoundingClientRect();
      if (!box || box.width < 40 || box.height < 40) return;

      const distance = Math.hypot(
        event.clientX - last.current.x,
        event.clientY - last.current.y,
      );
      if (distance < GAP) return;
      last.current = { x: event.clientX, y: event.clientY };

      const slide = homeHeroSlides[img.current % homeHeroSlides.length];
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
          rotate: (Math.random() - 0.5) * 16,
        },
      ]);

      const timer = window.setTimeout(() => {
        setPopups((current) => current.filter((item) => item.id !== id));
      }, LIFE_MS);
      timers.current.push(timer);
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, [active]);

  return (
    <div
      ref={root}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <AnimatePresence>
        {popups.map((item) => (
          <motion.div
            key={item.id}
            className="absolute w-44 overflow-hidden md:w-60"
            style={{ left: item.x, top: item.y }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: item.rotate - 10,
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
            exit={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.38, ease }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
