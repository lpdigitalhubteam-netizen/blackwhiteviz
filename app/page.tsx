import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Faq } from "@/components/Faq";
import { HomeHero } from "@/components/HomeHero";
import { Collage, Place } from "@/components/Place";
import { Reveal, RevealClip } from "@/components/Reveal";
import { blogIntro, blogPosts } from "@/lib/blog";
import { homeFaqs } from "@/lib/faq";
import { homeAbout, homeSelection } from "@/lib/home";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <section id="studio" className="px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight uppercase md:text-3xl lg:text-4xl">
          {homeAbout.kicker}
        </h2>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl leading-[1.08] font-semibold tracking-tight uppercase md:text-3xl">
              <RevealClip>{homeAbout.title}</RevealClip>
            </h3>
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

        <div className="mt-14">
          <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
            Featured projects
          </p>
          <h3 className="font-display mb-6 text-3xl font-semibold tracking-tight uppercase md:text-4xl">
            Our Works
          </h3>

          <Collage>
            <Place
              alt="Water Villa — coastal exterior"
              src="/project/WATER VILLA/Villa V1_01 Final copy.webp"
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
              alt="Nshama — lobby"
              src="/project/nshama/Lobby copy.webp"
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
          <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
            Our services
          </p>
          <h3 className="font-display text-3xl font-semibold tracking-tight uppercase md:text-4xl">
            <RevealClip>What we make</RevealClip>
          </h3>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-10 md:mt-6 md:grid-cols-3 md:gap-12">
          <Link
            href="/services/3d-architectural-rendering"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 20V8l8-4 8 4v12" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              3D Architectural Rendering
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              A transformation of blueprints into captivating, photorealistic
              renders.
            </p>
          </Link>

          <Link
            href="/services/3d-interior-renderings"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 20h16" />
                <path d="M6 20V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11" />
                <path d="M9 7V4h6v3" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              3D Interior Renderings
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              A journey through interiors, marked by meticulous detail and
              elegance.
            </p>
          </Link>

          <Link
            href="/services/interior-design-support"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              Interior Design Support
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Strategic interior design support that bridges creative vision and
              precise 3D visualization.
            </p>
          </Link>

          <Link
            href="/services/ar-vr"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M8 18h8" />
                <path d="M9 11h.01" />
                <path d="M15 11h.01" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              AR/VR
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              The future of interactive presentations, where reality meets the
              virtual world.
            </p>
          </Link>

          <Link
            href="/services/3d-walkthrough-videos"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5v14l11-7z" />
                <path d="M4 7h2" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              3D Walk-Through Videos
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Cinematic experiences that breathe life into your projects.
            </p>
          </Link>

          <Link
            href="/services/2d-3d-floor-plans"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center text-foreground/80">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M8 4v16" />
                <path d="M4 12h16" />
              </svg>
            </div>
            <div className="mt-4 font-display text-sm font-semibold tracking-[0.22em] uppercase text-white/85">
              2D & 3D Floor Plans
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Precise visualizations that offer clarity and insight.
            </p>
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
          >
            All services
            <span aria-hidden className="text-sm leading-none">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
              Selected projects
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
              Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
          >
            View more
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
          <h2 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-6xl">
            {blogIntro.title}
          </h2>
          <p className="mt-4 text-sm italic text-foreground/70 md:text-base">
            {blogIntro.tagline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {blogIntro.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
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
          <h2 className="font-display text-4xl font-semibold tracking-tight uppercase md:text-5xl">
            FAQ&apos;s
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={homeFaqs} />
        </div>
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
              {site.contact.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="text-muted transition-opacity hover:text-foreground hover:opacity-100"
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
