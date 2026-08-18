import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line px-5 py-8 md:px-8">
      <div className="flex flex-col gap-6 text-[11px] tracking-[0.14em] text-muted uppercase md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <Logo className="opacity-80 hover:opacity-100" />
          <span>© {new Date().getFullYear()} {site.wordmark}</span>
        </div>
        <a
          href={`mailto:${site.contact.email}`}
          className="text-foreground/60 hover:text-foreground"
        >
          {site.contact.email}
        </a>
        <span>Dubai</span>
      </div>
    </footer>
  );
}
