import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Collage, Place } from "@/components/Place";
import { HeroScrim } from "@/components/HeroScrim";
import { Reveal, RevealClip } from "@/components/Reveal";
import { ServiceTitle } from "@/components/ServiceTitle";
import {
  getAdjacentService,
  getService,
  servicePages,
} from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { prev, next } = getAdjacentService(slug);

  return (
    <main>
      <section className="relative h-[70svh] min-h-[28rem]">
        <Place
          alt={service.heroAlt}
          src={service.hero}
          ratio="16/9"
          fill
          className="h-full"
        />
        <HeroScrim />
        <div className="absolute right-0 bottom-0 left-0 z-[2] px-5 pb-8 md:px-8 md:pb-10">
          <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
            {service.kicker}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
            <ServiceTitle title={service.title} />
          </h1>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl leading-tight font-semibold tracking-tight uppercase md:text-3xl">
              <RevealClip>{service.line}</RevealClip>
            </h2>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="text-sm leading-relaxed text-muted">{service.body}</p>
          </Reveal>
        </div>
      </section>

      {service.video ? (
        <section className="px-5 pb-10 md:px-8 md:pb-14">
          <video
            className="w-full bg-panel"
            controls
            playsInline
            preload="metadata"
            poster={service.hero}
          >
            <source src={service.video} type="video/mp4" />
          </video>
        </section>
      ) : null}

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <Collage>
          {service.stills.map((still) => (
            <Place
              key={`${still.href}-${still.src}`}
              alt={still.alt}
              src={still.src}
              ratio="16/9"
              tile={still.tile}
              href={still.href}
              hover={still.title}
            />
          ))}
        </Collage>
      </section>

      <nav className="flex items-center justify-between gap-6 border-t border-line px-5 py-10 md:px-8">
        {prev ? (
          <Link
            href={`/services/${prev.slug}`}
            className="max-w-[45%] transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Previous
            </span>
            <span className="font-display text-lg font-semibold tracking-tight uppercase md:text-2xl">
              <ServiceTitle title={prev.title} />
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="max-w-[45%] text-right transition-opacity hover:opacity-60"
          >
            <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
              Next
            </span>
            <span className="font-display text-lg font-semibold tracking-tight uppercase md:text-2xl">
              <ServiceTitle title={next.title} />
            </span>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
