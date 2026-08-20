import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type EnquiryPayload,
  enquiryHtml,
  enquirySubject,
} from "@/lib/enquiry";
import { site } from "@/lib/site";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  // Allow typical phone characters: +, digits, spaces, parentheses, hyphens.
  return /^[0-9+\-\s()]{6,}$/.test(value);
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const email = payload.email?.trim();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const person = (payload.firstName ?? payload.name)?.trim();
  if (!person) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (payload.source === "price-guidelines" && !payload.company?.trim()) {
    return NextResponse.json(
      { error: "Company name is required." },
      { status: 400 },
    );
  }

  if (
    payload.source === "price-guidelines" &&
    (!payload.phone?.trim() || !isValidPhone(payload.phone.trim()))
  ) {
    return NextResponse.json(
      { error: "A valid phone number is required." },
      { status: 400 },
    );
  }

  if (payload.source === "contact" && !payload.message?.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.ENQUIRY_TO_EMAIL ?? site.contact.email;
  const from =
    process.env.ENQUIRY_FROM_EMAIL ??
    "Blackwhite Viz <onboarding@resend.dev>";

  const normalized: EnquiryPayload = {
    ...payload,
    email,
    firstName: payload.firstName?.trim(),
    name: payload.name?.trim(),
    company: payload.company?.trim(),
    phone: payload.phone?.trim(),
    message: payload.message?.trim(),
  };

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: enquirySubject(normalized),
    html: enquiryHtml(normalized),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send enquiry email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
