import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const loaded = require("ttf2woff2");
const ttf2woff2 = loaded.default ?? loaded;

const dir = path.resolve("public/fonts/FONT - Averta/FOT - Averta");
const files = ["AvertaStd-Regular.ttf", "AvertaStd-Semibold.ttf"];

for (const file of files) {
  const input = fs.readFileSync(path.join(dir, file));
  const output = ttf2woff2(input);
  const dest = path.join(dir, file.replace(".ttf", ".woff2"));
  fs.writeFileSync(dest, output);
  console.log(
    `${file} ${Math.round(input.length / 1024)}KB -> ${Math.round(output.length / 1024)}KB`,
  );
}
