export type EnquirySource = "price-guidelines" | "contact";

export type EnquiryPayload = {
  source: EnquirySource;
  name: string;
  email: string;
  company: string;
  phone: string;
  website?: string;
  hp?: string;
};

export function enquirySubject(payload: EnquiryPayload) {
  const label =
    payload.source === "price-guidelines" ? "Price Guidelines" : "Contact";

  return `[${label}] ${payload.name} — ${payload.company}`;
}

export function enquiryHtml(payload: EnquiryPayload) {
  function escapeHtml(value: string) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const safe = (value: string) => escapeHtml(String(value));
  const rows = [
    ["Source", payload.source],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company],
    ["Phone", payload.phone],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#666;vertical-align:top;">${safe(
          label,
        )}</td><td style="padding:8px 0;">${safe(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">
      <h2 style="margin:0 0 16px;font-size:18px;">New enquiry — Blackwhite Viz</h2>
      <table style="border-collapse:collapse;">${tableRows}</table>
    </div>
  `;
}

export function enquiryText(payload: EnquiryPayload) {
  return [
    "New enquiry — Blackwhite Viz",
    "",
    `Source: ${payload.source}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Phone: ${payload.phone}`,
  ].join("\n");
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { ok?: boolean; error?: string };

  if (!response.ok) {
    throw new Error(data.error ?? "Could not send enquiry.");
  }

  return data;
}
