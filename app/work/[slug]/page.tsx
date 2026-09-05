import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Collage, Place } from "@/components/Place";
import { Reveal } from "@/components/Reveal";
import { getAdjacent, getProject, collageTiles, projects } from "@/lib/projects";

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
  const gallery = project.frames
    .filter((frame): frame is typeof frame & { src: string } =>
      Boolean(frame.src),
    )
    .map((frame) => ({
      src: frame.src,
      alt: frame.alt,
    }));
  const tiles = collageTiles(project.frames.length);

  return (
    <main>
      <section className="px-5 pt-28 pb-10 md:px-8 md:pt-32 md:pb-14">
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          {project.type}
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-6xl lg:text-7xl">
          {project.title}
        </h1>

        <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="max-w-[36ch] text-base leading-relaxed text-foreground/85 md:text-lg">
              {project.excerpt}
            </p>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8">
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
        <Collage className="gap-2 md:gap-3" twoUp={project.frames.length === 2}>
          {project.frames.map((frame, i) => (
            <Place
              key={frame.alt}
              alt={frame.alt}
              src={frame.src}
              ratio="16/9"
              tile={tiles[i]}
              index={String(i + 1).padStart(2, "0")}
              gallery={gallery}
              bare
            />
          ))}
        </Collage>
      </section>

      <nav className="flex items-start justify-between gap-3 border-t border-line px-5 py-10 md:items-center md:gap-6 md:px-8">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="max-w-[48%] transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Previous
            </span>
            <span className="font-display text-base font-semibold tracking-tight uppercase md:text-2xl">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="max-w-[48%] text-right transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Next
            </span>
            <span className="font-display text-base font-semibold tracking-tight uppercase md:text-2xl">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
