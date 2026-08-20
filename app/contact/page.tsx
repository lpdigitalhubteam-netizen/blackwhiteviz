import type { Metadata } from "next";
import { Place } from "@/components/Place";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, RevealClip } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <div className="grid min-h-svh md:grid-cols-2">
        <div className="flex flex-col justify-end px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-16">
          <p className="mb-4 text-[10px] tracking-[0.28em] text-muted uppercase">
            05 — Contact
          </p>
          <h1 className="font-display mb-12 text-5xl font-semibold tracking-tight uppercase md:text-6xl">
            <RevealClip>Let us see</RevealClip>
            <RevealClip delay={0.08}>the drawings.</RevealClip>
          </h1>

          <Reveal>
            <address className="mb-12 not-italic">
              <a
                href={`mailto:${site.contact.email}`}
                className="block text-sm hover:opacity-60"
              >
                {site.contact.email}
              </a>
              {site.contact.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="mt-2 block text-sm hover:opacity-60"
                >
                  {phone.number}
                </a>
              ))}
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                {site.contact.address}
              </p>
            </address>
          </Reveal>

          <ContactForm />
        </div>

        <div className="min-h-[50svh] md:min-h-svh">
          <Place
            alt="Contact — dusk exterior still on the review screen"
            src="/work/danube-diamondz/01.webp"
            ratio="3/4"
            index="—"
            fill
            className="min-h-[50svh] md:min-h-svh"
          />
        </div>
      </div>
    </main>
  );
}
