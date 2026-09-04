import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

const year = new Date().getFullYear();

function SocialIcon({ label }: { label: (typeof site.social)[number]["label"] }) {
  const className = "h-[18px] w-[18px]";

  switch (label) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10v7M8 7.5v.01M12 17v-4.2c0-1.2.9-2.1 2.1-2.1s2 1 2 2.1V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
          <path
            d="M14 8.5h2.5L16 12H14v9h-3.5V12H9V8.5h1.5V7c0-1.4.9-2.5 2.7-2.5H16v3h-1.6c-.5 0-.9.4-.9.9v.1H14Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo className="opacity-90 hover:opacity-100" />
            <p className="mt-6 font-display text-xl font-semibold tracking-tight uppercase md:text-2xl">
              {site.wordmark}
            </p>
            <p className="mt-2 text-[11px] tracking-[0.22em] text-muted uppercase">
              By {site.parent}
            </p>
            <p className="mt-5 max-w-md text-justify text-sm leading-relaxed text-muted">
              We specialize in delivering 3D visualisation solutions that
              transform ideas into striking visual experiences. As one of the
              leading 3D visualisation companies, we combine creativity and
              precision to bring your concepts to life through advanced 3D
              rendering services in Dubai and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {site.regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[10px] tracking-[0.24em] text-foreground/80 uppercase"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 text-[10px] tracking-[0.28em] text-muted uppercase">
              Contact
            </p>
            <div className="space-y-3">
              {site.contact.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <span>
                    <span className="block text-[10px] tracking-[0.22em] text-muted uppercase">
                      Call us
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {phone.number}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-sm text-muted transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              ))}

              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span>
                  <span className="block text-[10px] tracking-[0.22em] text-muted uppercase">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-foreground/90 md:text-base">
                    {site.contact.email}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-sm text-muted transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted">
              {site.contact.address}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 text-[10px] tracking-[0.28em] text-muted uppercase">
              Follow
            </p>
            <div className="flex flex-wrap gap-3">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${item.label}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-foreground/80 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-foreground"
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>

            <p className="mt-8 mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
              Explore
            </p>
            <nav className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] tracking-[0.18em] text-foreground/70 uppercase transition-opacity hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-5 py-6 md:px-8">
        <div className="flex flex-col gap-3 text-[10px] tracking-[0.18em] text-muted uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.wordmark}. All rights reserved.
          </p>
          <p>
            {site.parent} · {site.regions.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
