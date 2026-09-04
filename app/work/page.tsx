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
  { slug: "water-villa", tile: "wide", cover: "Villa V4_01 Final copy.webp" },
  { slug: "tower-2", tile: "tall" },
  { slug: "kenya-villa", tile: "third", cover: "Villa - Night copy.webp" },
  { slug: "nshama", tile: "third", cover: "balcony copy.webp" },
  { slug: "fort", tile: "third" },
  { slug: "tower-3", tile: "tall" },
  { slug: "heritage", tile: "wide", cover: "Storytelling copy.webp" },
  { slug: "concept-tower", tile: "wide" },
  { slug: "tower-1", tile: "tall" },
  { slug: "interior", tile: "full" },
] as const;

function workCover(
  project: NonNullable<ReturnType<typeof getProject>>,
  cover?: string,
) {
  if (!cover) return project.frames[0];
  return (
    project.frames.find((frame) => frame.src?.endsWith(`/${cover}`)) ??
    project.frames[0]
  );
}

export default function WorkPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          02 — Work
        </p>
        <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-foreground uppercase md:text-7xl">
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
            const frame = workCover(
              project,
              "cover" in item ? item.cover : undefined,
            );
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
