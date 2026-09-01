import type { Metadata } from "next";
import { Collage, Place } from "@/components/Place";
import { Reveal, RevealItem, RevealList } from "@/components/Reveal";
import { getProject, tileClass } from "@/lib/projects";
import { absoluteTitle, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: absoluteTitle(seo.work.title),
  description: seo.work.description,
};

const workItems = [
  { slug: "water-villa", tile: "wide" },
  { slug: "tower-2", tile: "tall" },
  { slug: "kenya-villa", tile: "third" },
  { slug: "nshama", tile: "third" },
  { slug: "fort", tile: "third" },
  { slug: "tower-3", tile: "tall" },
  { slug: "heritage", tile: "wide" },
  { slug: "interior", tile: "full" },
] as const;

export default function WorkPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          02 — Work
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground uppercase md:text-7xl">
          Our Work
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          {seo.work.intro}
        </p>
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
