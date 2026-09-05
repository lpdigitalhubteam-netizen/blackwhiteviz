import dns from "node:dns";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

dns.setDefaultResultOrder("ipv4first");

function unquote(value: string) {
  return value.trim().replace(/^["']|["']$/g, "").trim();
}

export function getMailConfig() {
  const user = unquote(process.env.SMTP_USER ?? "");
  const pass = unquote(process.env.SMTP_PASS ?? "");
  const host = unquote(process.env.SMTP_HOST ?? "") || "smtp.office365.com";
  const port = Number(unquote(process.env.SMTP_PORT ?? "") || "587");

  if (!user || !pass) {
    return null;
  }

  return { user, pass, host, port };
}

function transportOptions(
  config: NonNullable<ReturnType<typeof getMailConfig>>,
  port: number,
): SMTPTransport.Options {
  return {
    host: config.host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      minVersion: "TLSv1.2",
    },
    connectionTimeout: 20_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  };
}

async function sendViaSendmail(options: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}) {
  if (process.platform === "win32") {
    throw new Error("Sendmail is not available on Windows.");
  }

  const transport = nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: process.env.SENDMAIL_PATH?.trim() || "/usr/sbin/sendmail",
  });

  try {
    await transport.sendMail({
      from: options.from,
      to: options.to,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
  } finally {
    transport.close();
  }
}

export async function sendViaSmtp(options: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}) {
  const config = getMailConfig();
  if (!config) {
    throw new Error("SMTP is not configured.");
  }

  const ports = [config.port];
  let lastError: unknown;

  for (const port of ports) {
    const transport = nodemailer.createTransport(transportOptions(config, port));
    try {
      await transport.sendMail({
        from: options.from,
        to: options.to,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });
      transport.close();
      return;
    } catch (error) {
      lastError = error;
      transport.close();
    }
  }

  if (process.platform !== "win32") {
    try {
      await sendViaSendmail(options);
      return;
    } catch (error) {
      lastError = lastError ?? error;
    }
  }

  throw lastError;
}

export function enquiryFromAddress() {
  const from = process.env.ENQUIRY_FROM_EMAIL?.trim();
  if (from) return from;
  const user = process.env.SMTP_USER?.trim();
  return user ? `Blackwhite Viz <${user}>` : "Blackwhite Viz";
}

export function enquiryToAddresses(fallback: string) {
  return (process.env.ENQUIRY_TO_EMAIL ?? fallback)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

export function getHostingerMailUrl() {
  return process.env.ENQUIRY_MAIL_URL?.trim() ?? null;
}

export function getHostingerMailSecret() {
  return process.env.ENQUIRY_MAIL_SECRET?.trim() ?? null;
}
