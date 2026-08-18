import type { Metadata } from "next";
import { Collage, Place } from "@/components/Place";
import { Reveal, RevealClip, RevealItem, RevealList } from "@/components/Reveal";
import { tileClass } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
};

const stills = [
  {
    alt: "Studio — farm house lighting study, afternoon shade",
    src: "/work/farm-house/02.webp",
    ratio: "16/9",
    tile: "wide" as const,
    index: "01",
  },
  {
    alt: "Studio — coastal villa still on the review wall",
    src: "/work/coastal-luxury-villa/02.webp",
    ratio: "16/9",
    tile: "tall" as const,
    index: "02",
  },
  {
    alt: "Studio — desert villa, dusk materials and glass",
    src: "/work/desert-villa/02.webp",
    ratio: "16/9",
    tile: "mid" as const,
    index: "03",
  },
  {
    alt: "Studio — Danube Bayz interior, golden hour pass",
    src: "/work/danube-bayz-102/01.webp",
    ratio: "16/9",
    tile: "mid" as const,
    index: "04",
  },
];

export default function StudioPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <Reveal>
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          03 — Studio
        </p>
        <h1 className="font-display mb-16 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight uppercase md:mb-24 md:text-7xl">
          <RevealClip>The work is</RevealClip>
          <RevealClip delay={0.08}>the argument.</RevealClip>
        </h1>
      </Reveal>

      <div className="mb-20 grid gap-10 md:grid-cols-12 md:mb-28">
        <Reveal className="md:col-span-5">
          <p className="text-lg leading-relaxed">{site.studio.lead}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
          <p className="text-sm leading-relaxed text-muted">{site.studio.body}</p>
          <p className="mt-6 text-[11px] tracking-[0.18em] text-muted uppercase">
            Dubai · 3ds Max · Corona
          </p>
        </Reveal>
      </div>

      <RevealList>
        <Collage>
          {stills.map((still) => (
            <RevealItem
              key={still.alt}
              className={`${tileClass[still.tile]} ${still.tile === "tall" ? "h-full" : ""}`}
            >
              <Place {...still} />
            </RevealItem>
          ))}
        </Collage>
      </RevealList>
    </main>
  );
}
