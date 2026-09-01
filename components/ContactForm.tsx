"use client";

import { FormEvent, useState } from "react";
import { submitEnquiry } from "@/lib/enquiry";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    try {
      await submitEnquiry({
        source: "contact",
        name,
        email,
        company,
        phone,
        website,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Thank you — your enquiry was sent to{" "}
        <a className="text-foreground" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
        . We will reply shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <label className="block">
        <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          disabled={status === "loading"}
          className="w-full border-b border-line bg-transparent py-1.5 text-sm outline-none transition-colors focus:border-foreground disabled:opacity-60"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          disabled={status === "loading"}
          className="w-full border-b border-line bg-transparent py-1.5 text-sm outline-none transition-colors focus:border-foreground disabled:opacity-60"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Company name
        </span>
        <input
          required
          name="company"
          type="text"
          disabled={status === "loading"}
          className="w-full border-b border-line bg-transparent py-1.5 text-sm outline-none transition-colors focus:border-foreground disabled:opacity-60"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
          Phone number
        </span>
        <input
          required
          name="phone"
          type="tel"
          inputMode="tel"
          disabled={status === "loading"}
          className="w-full border-b border-line bg-transparent py-1.5 text-sm outline-none transition-colors focus:border-foreground disabled:opacity-60"
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-400">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start text-[11px] tracking-[0.28em] uppercase transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
