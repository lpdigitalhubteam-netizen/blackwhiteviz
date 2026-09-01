import fs from "node:fs";
import nodemailer from "nodemailer";

function loadEnv(path) {
  const env = {};
  for (const line of fs.readFileSync(path, "utf8").split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return env;
}

const env = loadEnv(".env.local");
const user = env.SMTP_USER;
const pass = env.SMTP_PASS;
const host = env.SMTP_HOST ?? "smtp.titan.email";
const port = Number(env.SMTP_PORT ?? 587);

if (!user || !pass) {
  console.error("Set SMTP_USER and SMTP_PASS in .env.local first.");
  process.exit(1);
}

const transport = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  requireTLS: port === 587,
  auth: { user, pass },
  tls: { minVersion: "TLSv1.2" },
});

try {
  await transport.verify();
  console.log(`SMTP OK — ${host}:${port} accepted login for ${user}`);
} catch (error) {
  const code = error?.code ?? "ERROR";
  console.error(`SMTP failed (${code}) on ${host}:${port}`);
  console.error("1. Sign in at Hostinger webmail with the same password.");
  console.error("2. Titan → smtp.titan.email | Hostinger Email → smtp.hostinger.com");
  console.error("3. Update .env.local and restart npm run dev.");
  process.exit(1);
} finally {
  transport.close();
}
