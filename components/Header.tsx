"use client";

import { Logo } from "@/components/Logo";

export function Header({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
        <Logo priority onClick={() => open && onToggle()} />

        <button
          type="button"
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center"
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span
            className={`absolute h-px w-5 bg-foreground transition-transform duration-500 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-foreground transition-transform duration-500 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
