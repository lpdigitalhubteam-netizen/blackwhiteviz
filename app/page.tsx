import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { Collage, Place } from "@/components/Place";
import { Reveal, RevealClip } from "@/components/Reveal";
import { homeAbout, homeSelection, homeServices } from "@/lib/home";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <section id="studio" className="px-5 py-20 md:px-8 md:py-28">
        <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
          {homeAbout.kicker}
        </p>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl leading-[1.08] font-semibold tracking-tight uppercase md:text-5xl">
              <RevealClip>{homeAbout.title}</RevealClip>
            </h2>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-foreground/90">
              {homeAbout.lead}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {homeAbout.body}
            </p>
          </Reveal>
        </div>

        <Collage className="mt-14">
          <Place
            alt="Coastal villa — living terrace"
            src="/work/coastal-luxury-villa/02.webp"
            ratio="16/9"
            tile="wide"
            href="/work/coastal-luxury-villa"
            hover="Coastal Luxury Villa"
          />
          <Place
            alt="Desert villa — night"
            src="/work/desert-villa/02.webp"
            ratio="16/9"
            tile="tall"
            href="/work/desert-villa"
            hover="Desert Villa"
          />
          <Place
            alt="Bayz 102 — night interior"
            src="/work/danube-bayz-102/03.webp"
            ratio="16/9"
            tile="mid"
            href="/work/danube-bayz-102"
            hover="Danube Bayz 102"
          />
          <Place
            alt="Urban tower — night"
            src="/work/urban-tower/03.webp"
            ratio="16/9"
            tile="mid"
            href="/work/urban-tower"
            hover="Urban Tower"
          />
        </Collage>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
              Our services
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
              <RevealClip>What we make</RevealClip>
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60 md:block"
          >
            All services
          </Link>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {homeServices.map((service, i) => (
            <article
              key={service.slug}
              className="grid items-start gap-6 md:grid-cols-12 md:gap-8"
            >
              <div
                className={`grid grid-cols-2 gap-2 ${
                  i % 2 === 1 ? "md:col-span-7 md:col-start-6" : "md:col-span-8"
                }`}
              >
                {service.stills.map((still) => (
                  <Place
                    key={still.src}
                    alt={still.alt}
                    src={still.src}
                    ratio="4/5"
                    href={service.href}
                    hover={service.title}
                  />
                ))}
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
                  <h3 className="font-display mb-4 text-3xl font-semibold tracking-tight uppercase md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted">
                    {service.line}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-block text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
                  >
                    View
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
              A selection of our creations
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
              <RevealClip>Selected work</RevealClip>
            </h2>
          </div>
          <Link
            href="/work"
            className="text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
          >
            All projects
          </Link>
        </div>
        <Collage>
          {homeSelection.map((item, i) => (
            <Place
              key={`${item.href}-${i}`}
              alt={item.alt}
              src={item.src}
              ratio="16/9"
              tile={item.tile}
              href={item.href}
              hover={item.title}
            />
          ))}
        </Collage>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-t border-line pt-10 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
                Let&apos;s collaborate
              </p>
              <p className="font-display max-w-xl text-3xl leading-tight font-semibold tracking-tight uppercase md:text-5xl">
                A new project.
                <br />
                Send the drawings.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-[11px] tracking-[0.18em] uppercase">
              <Link
                href="/contact"
                className="transition-opacity hover:opacity-60"
              >
                Contact the studio
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-muted transition-opacity hover:text-foreground hover:opacity-100"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.phoneHref}
                className="text-muted transition-opacity hover:text-foreground hover:opacity-100"
              >
                {site.contact.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
