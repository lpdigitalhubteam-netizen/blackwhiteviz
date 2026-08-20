"use client";

import { FormEvent, useState } from "react";
import { submitEnquiry } from "@/lib/enquiry";
import { priceGuidelines } from "@/lib/price-guidelines";

type PriceGuidelineFormProps = {
  onSuccess?: () => void;
  compact?: boolean;
};

export function PriceGuidelineForm({
  onSuccess,
  compact = false,
}: PriceGuidelineFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    try {
      await submitEnquiry({
        source: "price-guidelines",
        firstName,
        email,
        company,
        phone,
        website,
      });

      setStatus("success");
      onSuccess?.();

      const link = document.createElement("a");
      link.href = priceGuidelines.downloadPath;
      link.download = priceGuidelines.downloadLabel;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div>
        <p className="mb-2 text-[10px] tracking-[0.28em] text-muted uppercase">
          Thank you
        </p>
        <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-2xl">
          Download started
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your details were sent to our team. If the download did not start, use
          the link below.
        </p>
        <a
          href={priceGuidelines.downloadPath}
          download={priceGuidelines.downloadLabel}
          className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20"
        >
          Download again
          <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  return (
    <>
      <p className="mb-2 text-[10px] tracking-[0.28em] text-muted uppercase">
        {priceGuidelines.kicker}
      </p>
      <h2 className="font-display text-xl font-semibold tracking-tight uppercase md:text-2xl">
        {compact ? "Price guideline" : priceGuidelines.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {priceGuidelines.description}
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
            First name *
          </span>
          <input
            required
            name="firstName"
            type="text"
            disabled={status === "loading"}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-white/25 disabled:opacity-60"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
            Email *
          </span>
          <input
            required
            name="email"
            type="email"
            disabled={status === "loading"}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-white/25 disabled:opacity-60"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
            Company name *
          </span>
          <input
            required
            name="company"
            type="text"
            disabled={status === "loading"}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-white/25 disabled:opacity-60"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[10px] tracking-[0.22em] text-muted uppercase">
            Phone number *
          </span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            disabled={status === "loading"}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-white/25 disabled:opacity-60"
          />
        </label>

        {status === "error" ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  );
}
