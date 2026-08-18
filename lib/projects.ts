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

function stills(
  slug: string,
  alts: string[],
  tiles: NonNullable<Frame["tile"]>[],
): Frame[] {
  return alts.map((alt, i) => ({
    alt,
    src: `/work/${slug}/${String(i + 1).padStart(2, "0")}.webp`,
    ratio: "16/9",
    tile: tiles[i],
  }));
}

export const projects: Project[] = [
  {
    slug: "coastal-luxury-villa",
    title: "Coastal Luxury Villa",
    type: "Exterior / Interior",
    location: "Dubai",
    year: "2025",
    featured: true,
    excerpt:
      "A waterfront house held between stone, glass, and the last light on the water.",
    frames: stills(
      "coastal-luxury-villa",
      [
        "Coastal Luxury Villa — dusk waterfront facade, infinity edge meeting the sea",
        "Coastal Luxury Villa — living terrace opening to the gulf",
        "Coastal Luxury Villa — night pool and warm glass",
        "Coastal Luxury Villa — interior looking out to water",
        "Coastal Luxury Villa — aerial of the plot and arrival",
      ],
      ["full", "tall", "wide", "mid", "mid"],
    ),
  },
  {
    slug: "urban-tower",
    title: "Urban Tower",
    type: "Exterior / Aerial",
    location: "Dubai",
    year: "2025",
    excerpt:
      "A slender commercial tower. Street, podium, crown — read in one glance.",
    frames: stills(
      "urban-tower",
      [
        "Urban Tower — concept aerial, glass catching late sun",
        "Urban Tower — street elevation, podium and crown",
        "Urban Tower — night view, lobby glow on wet paving",
      ],
      ["tall", "wide", "full"],
    ),
  },
  {
    slug: "water-island",
    title: "Water Island",
    type: "Masterplan / Aerial",
    location: "UAE",
    year: "2024",
    excerpt:
      "An island read from the air first: water, fingers of land, and the lights of arrival.",
    frames: stills(
      "water-island",
      [
        "Water Island — high aerial, turquoise channels and villa plots",
        "Water Island — marina promenade at blue hour",
        "Water Island — waterfront cluster from the channel",
        "Water Island — resort arrival and landscaped water",
        "Water Island — dusk boardwalk and restaurant terrace",
      ],
      ["full", "mid", "third", "wide", "mid"],
    ),
  },
  {
    slug: "city-mall",
    title: "City Mall",
    type: "Interior / Exterior",
    location: "Dubai",
    year: "2024",
    excerpt:
      "Retail as a civic room. Atrium light, night facade, the movement of people.",
    frames: stills(
      "city-mall",
      [
        "City Mall — night facade with arrival plaza",
        "City Mall — evening interior, stone floor and hanging gardens",
        "City Mall — atrium looking through floors of light",
        "City Mall — day exterior and landscaped drop-off",
        "City Mall — food court terrace opening to the city",
      ],
      ["wide", "tall", "mid", "full", "third"],
    ),
  },
  {
    slug: "danube-diamondz",
    title: "Danube Diamondz",
    client: "Danube Properties",
    type: "Exterior",
    location: "Dubai",
    year: "2025",
    excerpt:
      "A residential tower for a developer who needed the silhouette to sell the plan.",
    frames: stills(
      "danube-diamondz",
      [
        "Danube Diamondz — hero dusk elevation, cut-glass facade",
        "Danube Diamondz — amenity deck looking toward the skyline",
        "Danube Diamondz — street-level arrival and landscaped drop-off",
        "Danube Diamondz — night view, crown lighting",
        "Danube Diamondz — aerial of the tower in the city fabric",
      ],
      ["tall", "wide", "mid", "full", "third"],
    ),
  },
  {
    slug: "farm-house",
    title: "Farm House",
    type: "Exterior / Landscape",
    location: "UAE",
    year: "2024",
    excerpt:
      "A quiet house in planted ground. Shade, long walls, and the heat held back.",
    frames: stills(
      "farm-house",
      [
        "Farm House — approach through date palms to a low stone volume",
        "Farm House — courtyard with water rill and afternoon shade",
        "Farm House — living terrace opening to the planted field",
        "Farm House — dusk, kitchen light in a long horizontal window",
        "Farm House — aerial of the compound in planted ground",
      ],
      ["full", "third", "wide", "mid", "mid"],
    ),
  },
  {
    slug: "danube-bayz-102",
    title: "Danube Bayz 102",
    client: "Danube Properties",
    type: "Interior",
    location: "Dubai",
    year: "2025",
    excerpt:
      "Show interiors for a residential product. Rooms that feel lived in, not staged empty.",
    frames: stills(
      "danube-bayz-102",
      [
        "Danube Bayz 102 — living room, golden hour and city glass",
        "Danube Bayz 102 — day interior, pale stone and oak",
        "Danube Bayz 102 — night living, warm lamps and skyline",
        "Danube Bayz 102 — bedroom with sheer curtains",
        "Danube Bayz 102 — kitchen island, morning light",
      ],
      ["wide", "tall", "mid", "third", "full"],
    ),
  },
  {
    slug: "desert-villa",
    title: "Desert Villa",
    type: "Exterior / Landscape",
    location: "UAE",
    year: "2025",
    excerpt:
      "A house in sand and light. Day, dusk, rain — the same volume, four hours.",
    frames: stills(
      "desert-villa",
      [
        "Desert Villa — day, stone volume in planted dunes",
        "Desert Villa — night, courtyard fire and warm glass",
        "Desert Villa — sunrise, long shadow across the sand",
        "Desert Villa — rain, wet paving and overcast light",
      ],
      ["full", "wide", "mid", "third"],
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
