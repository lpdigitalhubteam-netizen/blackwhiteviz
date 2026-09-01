import { NextResponse } from "next/server";
import {
  type EnquiryPayload,
  enquiryHtml,
  enquirySubject,
  enquiryText,
} from "@/lib/enquiry";
import {
  createMailTransport,
  enquiryFromAddress,
  enquiryToAddresses,
} from "@/lib/mail";
import { site } from "@/lib/site";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
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

  const transport = createMailTransport();
  if (!transport) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const normalized: EnquiryPayload = {
    ...payload,
    email,
    firstName: payload.firstName?.trim(),
    name: payload.name?.trim(),
    company: payload.company?.trim(),
    phone: payload.phone?.trim(),
    message: payload.message?.trim(),
  };

  const subject = enquirySubject(normalized);
  const html = enquiryHtml(normalized);
  const text = enquiryText(normalized);
  const to = enquiryToAddresses(site.contact.email);
  const from = enquiryFromAddress();

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      { error: "Could not send enquiry email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
