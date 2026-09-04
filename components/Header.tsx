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
      <div className="pointer-events-auto flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Logo priority onClick={() => open && onToggle()} />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const baseHref = item.href.split("#")[0];
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(baseHref);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-100 ${
                  current ? "text-white" : "text-white/55"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center gap-3 text-white"
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
