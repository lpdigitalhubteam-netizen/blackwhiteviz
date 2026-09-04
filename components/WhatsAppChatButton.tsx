"use client";

import { site } from "@/lib/site";

function phoneToWhatsApp(phone: string) {
  const digitsOnly = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(
    "Hi Blackwhite Viz, I would like to get the price guideline and enquiry details.",
  )}`;
}

export function WhatsAppChatButton() {
  const primaryPhone = site.contact.phones[0]?.number ?? "";
  const href = phoneToWhatsApp(primaryPhone);

  return (
    <button
      type="button"
      aria-label="Chat on WhatsApp"
      onClick={() => {
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="group fixed right-5 bottom-5 z-[65] flex h-12 cursor-pointer items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-semibold transition-[max-width] duration-300 ease-out group-hover:max-w-[13rem]">
        <span className="inline-block translate-x-4 pr-1 pl-4 opacity-0 transition duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </span>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center">
        <svg
          width="22"
          height="22"
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
      </span>
    </button>
  );
}
