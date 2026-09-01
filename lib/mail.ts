import nodemailer from "nodemailer";

export function getMailConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const host = process.env.SMTP_HOST?.trim() ?? "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT ?? 465);

  if (!user || !pass) {
    return null;
  }

  return {
    user,
    pass,
    host,
    port,
    secure: port === 465,
  };
}

export function createMailTransport() {
  const config = getMailConfig();
  if (!config) return null;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
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
