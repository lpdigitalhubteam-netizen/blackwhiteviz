import { mkdir, rm } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/work");

const jobs = [
  {
    slug: "coastal-luxury-villa",
    files: [
      "1YPykh7g4F7ZA4OrIEC94Qy7rNXEPu3by",
      "1FeYRSrv7ARMW7nMktc6BqklMB6A0Oge1",
      "1tDZmLi5CP1xAAgHdhOMD6CCbQM2EG4mD",
      "1KaUxRy6caLx7d6BDs8gqGSty-gJkpcoX",
      "1TwMbaen69mjGb7AJ161wkeU9u4FXuKlV",
    ],
  },
  {
    slug: "urban-tower",
    files: [
      "1AIEFxszz9GGHundVtWxbFR2yxQ0Vh40a",
      "1vp-jxVySvG6qxcvkJlk91HUDAIsSVdpJ",
      "1dWxr3R7NVEFwoTs1jtCn1ky3mbNRJ9e8",
    ],
  },
  {
    slug: "water-island",
    files: [
      "1DA2UpGgPovIRfThQGxRIHG9Tjjwo1xVP",
      "1t4mIySp6DPhfREVdxiVD9g4ID9kJdAy1",
      "1z5oiov6xrIvv77zvhcHaWbGrhYqubDnV",
      "125_0qRTvHJpk0Ao6KWQnAiEL56dgSE6O",
      "1IgxSaOg2kC01UNXogzWQJrswC4OrEkDi",
    ],
  },
  {
    slug: "city-mall",
    files: [
      "1RHip3Ic2GkpvKRgzYVqZdjitwiqeJqaf",
      "11hHuwO_Y8Qncj5xf0njpVxc1yPsnbFjU",
      "1a8a_8wHw9c0Jy-ljhVudPVtdNx_n6TUm",
      "1EcIlsRDVAFANEnCt2W1XGMXz_85eT3Jg",
      "1qvYLBLIvd0uYB7oB6VotipbB-7bu_liy",
    ],
  },
  {
    slug: "danube-diamondz",
    files: [
      "1-rsFrqw_RHDKNqRYtsrIhmRJp7sImaHy",
      "1xrJk5139xmZ09ojs-DBD2xGElWLs-m0i",
      "1hcv4xVwiBP1HDtbUnJYItwt8jcQYYQxP",
      "1YNshgEyM77tehNNG6hQ2cxvKBwmAZe5d",
      "1kS2EW2hJSWudmuvtBqztAnnrnVubw5Vd",
    ],
  },
  {
    slug: "farm-house",
    files: [
      "1gFxDNBG4PmXAck99YgsFb3jacQv3fpYE",
      "13rXptCZSVHof8b3ruoQUi_i2wCHMJ5BJ",
      "1hdjLLnUh6K-Q-LkrGinKkhLPHLrEbY2p",
      "17QpSY4MApatYfR7j2tiAXlDesLatjCZh",
      "1tF3CMidlIMVH-SDFvpxZRbYt95i5oV73",
    ],
  },
  {
    slug: "danube-bayz-102",
    files: [
      "1frgutlP1dYuAxOrbQHEGD3fwPCyxyvn7",
      "19UMyNtwNZPn3K36uiBW8wlg9eACXIl-C",
      "1GPzqyIfIEd3eLB56RfW3_fLZ9iTQaRpM",
      "1mpUvg0qZCZ2pzx6556MZcdul9qvZkw-N",
      "1HkYfL8HDrBBo62-koBobtzCQp6nkPDbd",
    ],
  },
  {
    slug: "desert-villa",
    files: [
      "1MftBW1QKWzPexnIKu_RAUumqRDQXhJ1e",
      "1RVkIZ-Ugxs3HsojMw192h8fCusQW-1bV",
      "1xS_d6hv75i7zFDjaEeeGIgcOppxRm225",
      "1q2XEnAEqSRTrEramORjt9VwteOJt9V6l",
    ],
  },
];

function ratioFrom(width, height) {
  const r = width / height;
  if (r > 1.7) return "16/9";
  if (r > 1.4) return "3/2";
  if (r > 1.15) return "4/3";
  if (r < 0.72) return "4/5";
  return "1/1";
}

async function download(id, dest) {
  const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${id} ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
}

const meta = {};

await rm(path.join(ROOT, "_tmp"), { recursive: true, force: true });

for (const job of jobs) {
  const dir = path.join(ROOT, job.slug);
  await mkdir(dir, { recursive: true });
  meta[job.slug] = [];

  for (let i = 0; i < job.files.length; i++) {
    const id = job.files[i];
    const tmp = path.join(dir, `tmp-${i}`);
    const out = path.join(dir, `${String(i + 1).padStart(2, "0")}.webp`);
    process.stdout.write(`${job.slug} ${i + 1}/${job.files.length}... `);
    await download(id, tmp);
    const image = sharp(tmp);
    const info = await image.metadata();
    await image
      .rotate()
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    await rm(tmp, { force: true });
    const final = await sharp(out).metadata();
    meta[job.slug].push({
      src: `/work/${job.slug}/${String(i + 1).padStart(2, "0")}.webp`,
      ratio: ratioFrom(final.width, final.height),
      width: final.width,
      height: final.height,
    });
    console.log(`${final.width}x${final.height} ${final.size}b`);
  }
}

console.log(JSON.stringify(meta, null, 2));
