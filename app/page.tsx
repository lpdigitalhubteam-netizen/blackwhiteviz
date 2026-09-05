import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Faq } from "@/components/Faq";
import { HomeHero } from "@/components/HomeHero";
import { Collage, Place } from "@/components/Place";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { blogIntro, blogPosts } from "@/lib/blog";
import { homeFaqs } from "@/lib/faq";
import { homeAbout, homeHeroSlides, homeSelection } from "@/lib/home";
import { absoluteTitle, seo } from "@/lib/seo";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: absoluteTitle(seo.home.title),
  description: seo.home.description,
};

export default function Home() {
  return (
    <main>
      <link
        rel="preload"
        as="image"
        href={encodeURI(homeHeroSlides[0].src)}
        fetchPriority="high"
      />
      <HomeHero />

      <section id="studio" className="px-5 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10">
        <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-6xl">
              {homeAbout.kicker}
            </h2>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="text-justify text-sm leading-relaxed text-foreground/90 md:text-base">
              {homeAbout.lead}
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
            >
              Who we are
              <span aria-hidden className="text-sm leading-none">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pt-6 pb-20 md:px-8 md:pt-8 md:pb-28">
        <div>
          <h3 className="font-display mb-6 text-xl font-semibold tracking-tight uppercase md:text-4xl">
            Featured Projects
          </h3>

          <Collage>
            <Place
              alt="Water Villa — coastal exterior"
              src="/project/WATER VILLA/Villa V4_01 Final copy.webp"
              ratio="16/9"
              tile="wide"
              href="/work/water-villa"
              hover="Water Villa"
            />
            <Place
              alt="Tower Two — night"
              src="/project/TOWER2/TOWER NIGHT VIEW copy.webp"
              ratio="16/9"
              tile="tall"
              href="/work/tower-2"
              hover="Tower Two"
            />
            <Place
              alt="Nshama — balcony"
              src="/project/nshama/balcony copy.webp"
              ratio="16/9"
              tile="mid"
              href="/work/nshama"
              hover="Nshama"
            />
            <Place
              alt="Kenya Villa — night"
              src="/project/KENYA-VILLA/Villa - Night copy.webp"
              ratio="16/9"
              tile="mid"
              href="/work/kenya-villa"
              hover="Kenya Villa"
            />
          </Collage>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h3 className="font-display text-xl font-semibold tracking-tight uppercase md:text-4xl">
            Our Services
          </h3>
        </div>

        <div className="mx-auto mt-2 grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-8 md:mt-6 lg:grid-cols-3 lg:gap-14">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col items-center rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-6 text-center backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.08] md:px-5 md:py-8"
            >
              <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
                <ServiceIcon slug={service.slug} />
              </div>
              <div className="mt-4 flex min-h-[2.7em] w-full items-start justify-center font-display text-xs font-semibold leading-snug tracking-[0.08em] uppercase text-white/85 sm:text-sm sm:tracking-[0.14em]">
                <span>
                  {service.cardTitle[0]}
                  <span className="block">{service.cardTitle[1]}</span>
                </span>
              </div>
              <p className="mt-3 min-h-[2.5em] w-full text-xs leading-relaxed text-muted">
                {service.cardLine}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
          >
            Learn more
            <span aria-hidden className="text-sm leading-none">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-6xl">
            Our Works
          </h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
          >
            Browse all projects
            <span aria-hidden className="text-sm leading-none">
              →
            </span>
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

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
            {blogIntro.kicker}
          </p>
          <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-6xl">
            {blogIntro.title}
          </h2>
          <p className="mt-4 text-sm italic text-foreground/70 md:text-base">
            {blogIntro.tagline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {blogIntro.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
          >
            Read more
            <span aria-hidden className="text-sm leading-none">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-5xl">
            FAQ&apos;s
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={homeFaqs} />
        </div>
      </section>
    </main>
  );
}
