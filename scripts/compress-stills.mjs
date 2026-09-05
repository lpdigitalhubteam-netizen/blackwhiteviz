import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = path.resolve("public/project");
const MAX_EDGE = 1920;
const QUALITY = 80;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.webp$/i.test(entry.name) && !entry.name.startsWith("._"))
      files.push(full);
  }
  return files;
}

const files = await walk(root);
let saved = 0;

for (const file of files) {
  const before = (await fs.stat(file)).size;
  try {
    const input = await fs.readFile(file);
    const out = await sharp(input, { failOn: "none", animated: false })
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY, effort: 4 })
      .toBuffer();

    if (out.length >= before * 0.97) continue;

    await fs.writeFile(file, out);
    saved += before - out.length;
    console.log(
      `${((before - out.length) / 1024).toFixed(0)} KB  ${path.relative(root, file)}`,
    );
  } catch (error) {
    console.warn(
      `skip  ${path.relative(root, file)}  (${error instanceof Error ? error.message : error})`,
    );
  }
}

console.log(`Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
