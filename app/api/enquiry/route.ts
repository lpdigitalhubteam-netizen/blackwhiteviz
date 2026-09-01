import { NextResponse } from "next/server";
import {
  type EnquiryPayload,
  enquiryHtml,
  enquirySubject,
  enquiryText,
} from "@/lib/enquiry";
import {
  enquiryFromAddress,
  enquiryToAddresses,
  getHostingerMailSecret,
  getHostingerMailUrl,
  sendViaSmtp,
} from "@/lib/mail";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^[0-9+\-\s()]{6,}$/.test(value);
}

async function sendViaHostingerHttp(
  subject: string,
  text: string,
  html: string,
  replyTo: string,
) {
  const url = getHostingerMailUrl();
  const secret = getHostingerMailSecret();
  if (!url || !secret) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ subject, text, html, replyTo }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(body?.error ?? "Hostinger mail relay failed.");
  }

  return true;
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

  const mailUrl = getHostingerMailUrl();
  const mailSecret = getHostingerMailSecret();

  try {
    if (mailUrl && mailSecret) {
      await sendViaHostingerHttp(subject, text, html, email);
      return NextResponse.json({ ok: true });
    }

    if (!process.env.SMTP_USER?.trim() || !process.env.SMTP_PASS?.trim()) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 503 },
      );
    }

    await sendViaSmtp({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Could not send enquiry email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
