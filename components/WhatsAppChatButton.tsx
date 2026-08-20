"use client";

import Link from "next/link";
import { site } from "@/lib/site";

function phoneToWhatsApp(phone: string) {
  const digitsOnly = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(
    "Hi Blackwhite Viz — I’d like to get the price guideline / enquiry details.",
  )}`;
}

export function WhatsAppChatButton() {
  const primaryPhone = site.contact.phones[0]?.number ?? "";
  const href = phoneToWhatsApp(primaryPhone);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[65] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-semibold text-white shadow-lg transition-colors hover:bg-[#1ebe5b]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M20.5 11.9c0 4.8-3.9 8.7-8.7 8.7-1.5 0-3-.4-4.2-1l-4.6 1.2 1.2-4.5c-.7-1.3-1.1-2.7-1.1-4.4C3 7.1 6.9 3.2 11.7 3.2c4.8 0 8.8 3.9 8.8 8.7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.3 9.1c.2-.5.6-.5.9-.4l.7.3c.2.1.4.4.3.6-.1.5-.3 1-.2 1.1.1.4.8 1.4 1.9 2.3 1 .8 1.9 1.2 2.3 1.3.2.1.6-.1.9-.4.2-.2.4-.3.6-.2l.8.4c.3.2.4.4.3.7-.1.5-.7 1.5-1.4 1.6-1 .2-2.2-.1-3.6-.9-1.6-.9-3.1-2.4-4-4-.8-1.4-1.1-2.7-.9-3.7.1-.5.5-1 .9-1.1Z"
          fill="currentColor"
          opacity="0.95"
        />
      </svg>
      <span>Chat with us on WhatsApp</span>
    </Link>
  );
}

