import type { Metadata } from "next";
import Link from "next/link";
import { Place } from "@/components/Place";
import { Reveal, RevealClip } from "@/components/Reveal";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main className="px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-32">
      <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
        04 — Services
      </p>
      <h1 className="font-display mb-16 text-5xl font-semibold tracking-tight uppercase md:mb-24 md:text-7xl">
        <RevealClip>What we make</RevealClip>
      </h1>

      <div className="flex flex-col gap-20 md:gap-28">
        {servicePages.map((service, i) => (
          <article
            key={service.slug}
            className="grid items-start gap-6 md:grid-cols-12 md:gap-8"
          >
            <div
              className={
                i % 2 === 1 ? "md:col-span-7 md:col-start-6" : "md:col-span-8"
              }
            >
              <Place
                alt={service.heroAlt}
                src={service.hero}
                ratio="16/9"
                index={String(i + 1).padStart(2, "0")}
                href={`/services/${service.slug}`}
                hover={service.title}
              />
            </div>
            <div
              className={
                i % 2 === 1
                  ? "md:sticky md:top-28 md:col-span-4 md:col-start-1 md:row-start-1 md:self-start"
                  : "md:sticky md:top-28 md:col-span-4 md:self-start"
              }
            >
              <Reveal>
                <p className="mb-3 text-[10px] tracking-[0.22em] text-muted uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight uppercase md:text-4xl">
                  {service.title}
                </h2>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
                  {service.line}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
                >
                  View
                </Link>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
