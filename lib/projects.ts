export type Frame = {
  alt: string;
  ratio: string;
  src?: string;
  tile?: "full" | "wide" | "mid" | "third" | "tall";
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  type: string;
  location: string;
  year: string;
  featured?: boolean;
  excerpt: string;
  frames: Frame[];
};

/** Build a public path under /project (folder + filename may include spaces). */
export function projectSrc(folder: string, file: string) {
  return `/project/${folder}/${file}`;
}

function framesFrom(
  folder: string,
  files: string[],
  alts: string[],
  tiles: NonNullable<Frame["tile"]>[],
): Frame[] {
  return files.map((file, i) => ({
    alt: alts[i] ?? `${folder} — still ${i + 1}`,
    src: projectSrc(folder, file),
    ratio: "16/9",
    tile: tiles[i] ?? "mid",
  }));
}

export const projects: Project[] = [
  {
    slug: "water-villa",
    title: "Water Villa",
    type: "Exterior",
    location: "UAE",
    year: "2025",
    featured: true,
    excerpt:
      "A coastal villa held between glass, water, and the hour the facade should be remembered.",
    frames: framesFrom(
      "WATER VILLA",
      [
        "Villa V1_01 Final copy.webp",
        "Villa V2_01 Final copy.webp",
        "Villa V4_01 Final copy.webp",
        "Villa V4 Night_01 copy.webp",
      ],
      [
        "Water Villa — daytime waterfront exterior",
        "Water Villa — alternate facade and approach",
        "Water Villa — final exterior still",
        "Water Villa — night exterior glow",
      ],
      ["full", "wide", "mid", "tall"],
    ),
  },
  {
    slug: "kenya-villa",
    title: "Kenya Villa",
    type: "Exterior / Landscape",
    location: "Africa",
    year: "2025",
    featured: true,
    excerpt:
      "A villa in landscape and light — day volumes, planted ground, and warm night arrival.",
    frames: framesFrom(
      "KENYA-VILLA",
      [
        "f3 copy.webp",
        "f4 copy.webp",
        "n_4 copy.webp",
        "Villa - Night copy.webp",
      ],
      [
        "Kenya Villa — exterior day still",
        "Kenya Villa — landscape and volume",
        "Kenya Villa — dusk approach",
        "Kenya Villa — night exterior",
      ],
      ["wide", "tall", "mid", "full"],
    ),
  },
  {
    slug: "tower-2",
    title: "Tower Two",
    type: "Exterior",
    location: "Dubai",
    year: "2025",
    featured: true,
    excerpt:
      "Day, night, and close-up facade — a tower read clearly for sales and approvals.",
    frames: framesFrom(
      "TOWER2",
      [
        "TOWER DAY RENDER-3 copy.webp",
        "TOWER NIGHT VIEW copy.webp",
        "TOWER CLOSE UP VIEW.-1 copy.webp",
      ],
      [
        "Tower Two — day architectural render",
        "Tower Two — night view",
        "Tower Two — facade close-up",
      ],
      ["full", "wide", "tall"],
    ),
  },
  {
    slug: "tower-1",
    title: "Tower One",
    type: "Exterior / Aerial",
    location: "Dubai",
    year: "2025",
    excerpt: "Tower views that carry scale, glass, and the city around the form.",
    frames: framesFrom(
      "TOWER1",
      ["Tower view 01_02 copy.webp", "Tower view 02_01 copy.webp"],
      [
        "Tower One — primary exterior view",
        "Tower One — secondary tower view",
      ],
      ["wide", "tall"],
    ),
  },
  {
    slug: "tower-3",
    title: "Tower Three",
    type: "Exterior / Amenity",
    location: "Dubai",
    year: "2025",
    featured: true,
    excerpt:
      "Tower, amenity, and evening light — clubhouse, courts, and lobby moments in one project set.",
    frames: framesFrom(
      "Tower3",
      [
        "gcam - 1_evening_rev16 copy.webp",
        "25 copy.webp",
        "Basketball_1 copy.webp",
        "CLUBHOUSE copy.webp",
        "cam - 012_ev_final copy.webp",
        "cam - 014_ev_final copy.webp",
        "MEETING_CShading_LightMix copy.webp",
      ],
      [
        "Tower Three — evening exterior",
        "Tower Three — architectural still",
        "Tower Three — basketball amenity",
        "Tower Three — clubhouse",
        "Tower Three — evening camera 012",
        "Tower Three — evening camera 014",
        "Tower Three — meeting room interior",
      ],
      ["full", "wide", "mid", "tall", "third", "third", "mid"],
    ),
  },
  {
    slug: "concept-tower",
    title: "Concept Tower",
    type: "Exterior / Detail",
    location: "Dubai",
    year: "2025",
    excerpt:
      "Detail passes that sell the glass, depth, and material intent of the tower concept.",
    frames: framesFrom(
      "concept tower",
      ["sp_2_detail_final.webp", "sp_3_detail_final.webp"],
      [
        "Concept Tower — detail final still",
        "Concept Tower — secondary detail pass",
      ],
      ["tall", "wide"],
    ),
  },
  {
    slug: "fort",
    title: "Fort",
    type: "Exterior",
    location: "UAE",
    year: "2024",
    excerpt:
      "Mass, light, and place — exterior cameras that hold the fort in clear volume.",
    frames: framesFrom(
      "Fort",
      [
        "cam - 1.jpg copy.webp",
        "cam - 2 copy.webp",
        "cam - 4.jpg copy.webp",
        "cam - 5 copy.webp",
        "cam - 7 copy.webp",
      ],
      [
        "Fort — camera 01 exterior",
        "Fort — camera 02 exterior",
        "Fort — camera 04 exterior",
        "Fort — camera 05 exterior",
        "Fort — camera 07 exterior",
      ],
      ["full", "wide", "mid", "third", "tall"],
    ),
  },
  {
    slug: "heritage",
    title: "Heritage",
    type: "Interior / Cultural",
    location: "UAE",
    year: "2024",
    excerpt:
      "Cultural interiors and storytelling spaces — majlis, classic cars, and narrative rooms.",
    frames: framesFrom(
      "heretage",
      [
        "Majlis copy.webp",
        "Classic Cars copy.webp",
        "Storytelling copy.webp",
        "09 copy.webp",
        "11_p.rev copy.webp",
      ],
      [
        "Heritage — majlis interior",
        "Heritage — classic cars gallery",
        "Heritage — storytelling space",
        "Heritage — interior still 09",
        "Heritage — interior still 11",
      ],
      ["wide", "tall", "mid", "third", "full"],
    ),
  },
  {
    slug: "interior",
    title: "Interior Studies",
    type: "Interior",
    location: "Dubai",
    year: "2025",
    excerpt:
      "Interior stills for finish, furniture, and daylight — rooms that feel decided.",
    frames: framesFrom(
      "INTERIOR",
      ["02 copy.webp", "7 copy.webp", "8 copy.webp", "v2_2 copy.webp"],
      [
        "Interior — living still 02",
        "Interior — study 07",
        "Interior — study 08",
        "Interior — variant v2",
      ],
      ["wide", "mid", "tall", "full"],
    ),
  },
  {
    slug: "nshama",
    title: "Nshama",
    type: "Interior / Exterior",
    location: "Dubai",
    year: "2025",
    featured: true,
    excerpt:
      "Lobby, living, kids room, balcony, and pool — a residential product told in finished frames.",
    frames: framesFrom(
      "nshama",
      [
        "Lobby copy.webp",
        "Living Room  copy.webp",
        "KIDS ROOM-2 copy.webp",
        "balcony copy.webp",
        "pool copy.webp",
      ],
      [
        "Nshama — lobby interior",
        "Nshama — living room",
        "Nshama — kids room",
        "Nshama — balcony",
        "Nshama — pool",
      ],
      ["full", "wide", "mid", "tall", "third"],
    ),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[index - 1] ?? projects[projects.length - 1],
    next: projects[index + 1] ?? projects[0],
  };
}

export const tileClass: Record<NonNullable<Frame["tile"]>, string> = {
  full: "md:col-span-12",
  wide: "md:col-span-8",
  mid: "md:col-span-6",
  third: "md:col-span-4",
  tall: "md:col-span-4",
};

/** Pack tiles so every row fills 12 cols — no vacant cells for odd counts. */
export function collageTiles(
  count: number,
): NonNullable<Frame["tile"]>[] {
  const tiles: NonNullable<Frame["tile"]>[] = [];
  let left = count;

  while (left > 0) {
    if (left >= 4) {
      tiles.push("wide", "tall", "mid", "mid");
      left -= 4;
    } else if (left === 3) {
      tiles.push("wide", "tall", "full");
      left -= 3;
    } else if (left === 2) {
      tiles.push("mid", "mid");
      left -= 2;
    } else {
      tiles.push("full");
      left -= 1;
    }
  }

  return tiles;
}
