"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project enquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Your mail client should open. If it does not, write directly to{" "}
        <a className="text-foreground" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-8">
      <label className="block">
        <span className="mb-3 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          className="w-full border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
        />
      </label>
      <label className="block">
        <span className="mb-3 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          className="w-full border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
        />
      </label>
      <label className="block">
        <span className="mb-3 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Project
        </span>
        <textarea
          required
          name="message"
          rows={4}
          className="w-full resize-none border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
        />
      </label>
      <button
        type="submit"
        className="self-start text-[11px] tracking-[0.28em] uppercase transition-opacity hover:opacity-60"
      >
        Send
      </button>
    </form>
  );
}
