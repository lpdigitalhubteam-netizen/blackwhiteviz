"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 bg-transparent">
      <div className="pointer-events-auto mx-auto flex max-w-[90rem] items-center justify-between px-5 py-3 md:px-12 md:py-5 lg:px-16">
        <Logo priority onClick={() => open && onToggle()} />

        <nav className="hidden items-center gap-6 rounded-full border border-white/40 bg-white/80 px-6 py-2.5 shadow-sm backdrop-blur-md lg:flex xl:gap-7 xl:px-7">
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) => {
            const baseHref = item.href.split("#")[0];
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(baseHref);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[11px] tracking-[0.22em] uppercase transition-colors after:absolute after:right-0 after:bottom-[-4px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-black hover:after:scale-x-100 ${
                  current ? "text-black after:scale-x-100" : "text-black/55"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center rounded-full bg-white px-5 py-2.5 text-[11px] tracking-[0.22em] text-black uppercase transition-opacity hover:opacity-85 lg:inline-flex"
        >
          Let&apos;s talk
        </Link>

        <button
          type="button"
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center gap-3 text-white lg:hidden"
        >
          <span className="hidden text-[11px] tracking-[0.22em] uppercase sm:inline">
            {open ? "Close" : "Menu"}
          </span>
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-500 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-500 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}
