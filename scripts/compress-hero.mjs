import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = path.resolve("public/project/website Cover");
const MAX_EDGE = 1280;
const QUALITY = 72;

const entries = await fs.readdir(root, { withFileTypes: true });
let saved = 0;

for (const entry of entries) {
  if (!entry.isFile() || !/\.webp$/i.test(entry.name) || entry.name.startsWith("._")) {
    continue;
  }
  const file = path.join(root, entry.name);
  const before = (await fs.stat(file)).size;
  const input = await fs.readFile(file);
  const out = await sharp(input, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY, effort: 5 })
    .toBuffer();
  if (out.length >= before * 0.97) continue;
  await fs.writeFile(file, out);
  saved += before - out.length;
  console.log(`${Math.round((before - out.length) / 1024)} KB  ${entry.name}`);
}

console.log(`Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
