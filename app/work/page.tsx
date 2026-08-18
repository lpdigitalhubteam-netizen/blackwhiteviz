import type { Metadata } from "next";
import { Collage, Place } from "@/components/Place";
import { Reveal, RevealItem, RevealList } from "@/components/Reveal";
import { getProject, tileClass } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
};

const workItems = [
  { slug: "coastal-luxury-villa", tile: "wide" },
  { slug: "urban-tower", tile: "tall" },
  { slug: "water-island", tile: "third" },
  { slug: "city-mall", tile: "third" },
  { slug: "danube-diamondz", tile: "third" },
  { slug: "desert-villa", tile: "tall" },
  { slug: "farm-house", tile: "wide" },
  { slug: "danube-bayz-102", tile: "full" },
] as const;

export default function WorkPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          02 — Work
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground uppercase md:text-7xl">
          Selected Work
        </h1>
      </Reveal>

      <RevealList>
        <Collage>
          {workItems.map((item, i) => {
            const project = getProject(item.slug);
            if (!project) return null;
            const frame = project.frames[0];
            return (
              <RevealItem
                key={project.slug}
                className={`${tileClass[item.tile]} ${item.tile === "tall" ? "h-full" : ""}`}
              >
                <Place
                  alt={frame.alt}
                  src={frame.src}
                  ratio="16/9"
                  tile={item.tile}
                  index={String(i + 1).padStart(2, "0")}
                  href={`/work/${project.slug}`}
                  hover={project.title}
                />
              </RevealItem>
            );
          })}
        </Collage>
      </RevealList>
    </main>
  );
}
