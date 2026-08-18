import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Collage, Place } from "@/components/Place";
import { HeroScrim } from "@/components/HeroScrim";
import { Reveal, RevealClip } from "@/components/Reveal";
import { getAdjacent, getProject, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(slug);
  const [hero, ...rest] = project.frames;

  return (
    <main>
      <section className="relative h-[92svh] min-h-[32rem]">
        <Place
          alt={hero.alt}
          src={hero.src}
          ratio={hero.ratio}
          index="01"
          fill
          className="h-full"
        />
        <HeroScrim />
        <div className="absolute right-0 bottom-0 left-0 z-[2] px-5 pb-8 md:px-8 md:pb-10">
          <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
            {project.type}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl leading-tight font-semibold tracking-tight uppercase md:text-3xl">
              <RevealClip>{project.excerpt}</RevealClip>
            </h2>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <dl className="grid grid-cols-2 gap-y-6 text-[11px] tracking-[0.16em] uppercase">
              <div>
                <dt className="mb-2 text-muted">Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt className="mb-2 text-muted">Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt className="mb-2 text-muted">Discipline</dt>
                <dd>{project.type}</dd>
              </div>
              {project.client ? (
                <div>
                  <dt className="mb-2 text-muted">Client</dt>
                  <dd>{project.client}</dd>
                </div>
              ) : null}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <Collage>
          {rest.map((frame, i) => (
            <Place
              key={frame.alt}
              alt={frame.alt}
              src={frame.src}
              ratio="16/9"
              tile={frame.tile}
              index={String(i + 2).padStart(2, "0")}
            />
          ))}
        </Collage>
      </section>

      <nav className="flex items-center justify-between gap-6 border-t border-line px-5 py-10 md:px-8">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="max-w-[45%] transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Previous
            </span>
            <span className="font-display text-lg font-semibold tracking-tight uppercase md:text-2xl">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="max-w-[45%] text-right transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Next
            </span>
            <span className="font-display text-lg font-semibold tracking-tight uppercase md:text-2xl">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
