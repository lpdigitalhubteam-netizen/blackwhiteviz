import type { Metadata } from "next";
import { Place } from "@/components/Place";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pt-28 pb-12 md:min-h-[85svh] md:px-8 md:pt-24 md:pb-12">
          <p className="mb-3 text-[10px] tracking-[0.28em] text-muted uppercase">
            06 — Contact
          </p>
          <h1 className="font-display mb-6 text-4xl font-semibold tracking-tight uppercase md:mb-7 md:text-5xl lg:text-6xl">
            Get in touch
            <br />
            with us.
          </h1>

          <Reveal>
            <address className="mb-6 not-italic md:mb-7">
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
                  className="mt-1.5 block text-sm hover:opacity-60"
                >
                  {phone.number}
                </a>
              ))}
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {site.contact.address}
              </p>
            </address>
          </Reveal>

          <ContactForm />
        </div>

        <div className="relative min-h-[42svh] md:min-h-[85svh]">
          <Place
            alt="Contact — Tower Three evening exterior"
            src="/project/Tower3/gcam - 1_evening_rev16 copy.webp"
            ratio="3/4"
            index="—"
            fill
            className="absolute inset-0 h-full w-full min-h-[42svh] md:min-h-[85svh]"
          />
        </div>
      </div>
    </main>
  );
}
