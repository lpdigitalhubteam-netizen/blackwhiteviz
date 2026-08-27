"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ImageTrail } from "@/components/ImageTrail";
import { nav, site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Menu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 overflow-hidden bg-background"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease }}
        >
          <ImageTrail active={open} />
          <div className="relative z-10 flex h-full flex-col justify-between px-5 pt-24 pb-8 md:px-12 md:pt-28 md:pb-12">
            <nav data-menu-nav className="flex w-fit flex-col gap-1 md:gap-2">
              {nav.map((item, i) => {
                const baseHref = item.href.split("#")[0];
                const current =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(baseHref);
                return (
                  <motion.div
                    key={item.href}
                    className="w-fit"
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + i * 0.06,
                      ease,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group inline-flex items-baseline gap-4 md:gap-8"
                    >
                      <span className="w-6 text-[10px] tracking-[0.2em] text-muted">
                        {item.index}
                      </span>
                      <span
                        className={`font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-6xl lg:text-7xl ${
                          current
                            ? "text-foreground"
                            : "text-foreground/35 group-hover:text-foreground"
                        } transition-colors duration-300`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              className="flex flex-col justify-between gap-4 text-[11px] tracking-[0.16em] text-muted uppercase md:flex-row md:items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="max-w-xs leading-relaxed normal-case tracking-normal">
                {site.tagline}
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-foreground/70 hover:text-foreground"
              >
                {site.contact.email}
              </a>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
