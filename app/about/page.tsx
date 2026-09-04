import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Place } from "@/components/Place";
import { Reveal } from "@/components/Reveal";
import { StickyScrollImage } from "@/components/StickyScrollImage";
import { site } from "@/lib/site";

import { absoluteTitle, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: absoluteTitle(seo.about.title),
  description: seo.about.description,
};

const pillars = [
  {
    title: "Clear storytelling",
    body: "We build photoreal visuals that sell the project—accurate materials, believable light, and frames that communicate design intent without noise.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 19V5l8-2 8 2v14l-8 2-8-2Z" />
        <path d="M12 3v18" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
  {
    title: "Client-focused delivery",
    body: "From concept launches to sales decks and marketing sets, we tailor interiors, exteriors, landscapes, and animation to how your team needs to decide and present.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 19c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5" />
        <path d="M13 19c.8-1.8 2-2.8 3.5-2.8 1.2 0 2.2.6 3 1.8" />
      </svg>
    ),
  },
  {
    title: "Precision and detail",
    body: "Every pass is finished with care—glass, stone, landscape, and atmosphere—so stakeholders can trust what they see before construction begins.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    title: "Results that travel",
    body: "As part of Latheif Productions, we work across UAE, Africa, Sri Lanka, and India—formatting visuals for marketing, sales, and approvals worldwide.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
] as const;

const clientLogos = [
  { src: "/clients/danube.png", alt: "Danube Properties" },
  { src: "/clients/nestle.png", alt: "Nestle" },
  { src: "/clients/cocacola.png", alt: "Coca-Cola" },
  { src: "/clients/emarat.png", alt: "Emarat" },
  { src: "/clients/westwood.png", alt: "Westwood Complex" },
] as const;

export default function AboutPage() {
  return (
    <main className="relative">
      {/* 1 — Hero scrolls over the fixed under-image */}
      <section className="relative z-20 h-[58svh] min-h-[26rem] overflow-hidden bg-background md:h-[70svh] md:min-h-[34rem]">
        <Image
          src={encodeURI("/project/WATER VILLA/Villa V1_01 Final copy.webp")}
          alt="About us — Blackwhite Viz architectural visualization"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-black/45"
        />
        <div className="absolute inset-0 z-[2] flex items-center px-5 md:items-end md:px-10 md:pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-sm bg-black px-3.5 py-1.5 text-[10px] tracking-[0.22em] text-white uppercase">
              About us
            </p>
            <h1 className="font-display text-[2.35rem] leading-[1.08] font-normal tracking-tight text-white italic sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Architectural Visualization
              <br />
              Company, UAE
            </h1>
          </div>
        </div>
      </section>

      {/* 2 — Text scrolls; right side is a window onto a fixed under-page image */}
      <section className="relative z-10">
        <div className="grid items-stretch md:grid-cols-2">
          <Reveal className="bg-background px-5 py-14 md:px-10 md:py-20 lg:px-14">
            <h2 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-4xl lg:text-5xl">
              {site.name}
            </h2>
            <p className="mt-3 text-[11px] tracking-[0.22em] text-muted uppercase">
              Powered by {site.parent}
            </p>
            <p className="mt-7 max-w-xl text-sm leading-[1.85] text-muted md:text-[15px]">
              {seo.about.intro} Working with clients across{" "}
              {site.regions.join(", ")}, we support developers, architects, and
              brands with photoreal stills, animations, and aerials — whether you
              are planning a concept launch, putting together a sales deck, or
              creating a complete set of marketing assets.
            </p>
            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-[11px] tracking-[0.22em] text-background uppercase transition-opacity hover:opacity-80"
            >
              Our services
            </Link>
          </Reveal>

          <StickyScrollImage
            src="/project/TOWER2/TOWER DAY RENDER-3 copy.webp"
            alt="Blackwhite Viz — urban tower night visualization"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-20 bg-background px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-5xl">
            Building spaces
            <br />
            before they exist
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06} className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center text-foreground/80">
                {pillar.icon}
              </div>
              <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
                {pillar.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="relative z-20 border-y border-line bg-background px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <p className="mb-8 text-center text-[10px] tracking-[0.28em] text-muted uppercase">
            Trusted clients
          </p>
          <div className="flex w-full flex-nowrap items-center justify-center gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-20 items-center justify-center md:h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={420}
                  height={160}
                  className="h-[5.25rem] w-auto max-w-[280px] object-contain opacity-90 md:h-[5.75rem] md:max-w-[330px]"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="relative z-20 bg-background px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
            {site.wordmark}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-5xl">
            Mission
          </h2>
          <p className="mt-8 text-sm leading-relaxed text-muted md:text-base">
            Our mission is to turn unbuilt space into images you can decide on.
            We elevate architecture and interiors by transforming drawings into
            lifelike, immersive stills and films that captivate clients and
            stakeholders. As part of {site.parent}, we merge creative direction
            with technical precision—3D rendering, exterior and interior
            visualization, landscape, and animation—so developers and designers
            can lead with clarity before a single wall goes up.
          </p>
          <p className="mt-6 text-[11px] tracking-[0.18em] text-muted uppercase">
            Dubai · 3ds Max · Corona
          </p>
        </Reveal>
      </section>

      {/* Closing CTA + wide still */}
      <section className="relative z-20 bg-background px-5 pb-24 md:px-8 md:pb-32">
        <Reveal className="relative overflow-hidden">
          <Place
            alt="About — desert villa dusk materials and glass"
            src="/project/KENYA-VILLA/Villa - Night copy.webp"
            ratio="21/9"
            index="03"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-10 text-center md:pb-14">
            <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
              Ready to transform your vision into visuals that sell?
            </p>
            <Link
              href="/contact"
              className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[11px] tracking-[0.22em] text-white uppercase transition-colors hover:bg-white/20"
            >
              Contact the studio
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
