import { projectSrc } from "@/lib/projects";

const cover = (file: string) => projectSrc("website Cover", file);

export const homeHeroSlides = [
  {
    src: cover("Website cover copy.webp"),
    alt: "3D visualization in Dubai — Blackwhite Viz",
    title: "3D Visualization in Dubai",
    kicker: "Blackwhite Viz",
    lines: ["3D Visualization", "In Dubai"],
    paragraph:
      "Photoreal renders for architects, developers, and real estate brands.",
  },
  {
    src: cover("Villa V4_01 Final copy.webp"),
    alt: "Water Villa 3D rendering — exterior",
    title: "Water Villa",
    kicker: "Exterior rendering",
    lines: ["Water Villa", "3D Rendering"],
    paragraph:
      "Exterior visuals that bring luxury living closer to reality.",
  },
  {
    src: cover("sunrise copy.webp"),
    alt: "Architectural rendering — sunrise facade",
    title: "Architectural Rendering",
    kicker: "Architecture",
    lines: ["Architectural", "Rendering"],
    paragraph:
      "Light, material, and form captured before construction begins.",
  },
  {
    src: cover("Pool lady remove.jpg copy.webp"),
    alt: "Real estate visualization — pool and amenities",
    title: "Real Estate Visualization",
    kicker: "Amenity & lifestyle",
    lines: ["Real Estate", "Visualization"],
    paragraph:
      "Amenities, pools, and lifestyle spaces made easier to present.",
  },
  {
    src: cover("Remove family.jpg copy.webp"),
    alt: "Residential 3D renders — exterior",
    title: "Residential 3D Renders",
    kicker: "Residential",
    lines: ["Residential", "3D Renders"],
    paragraph:
      "Clean visuals that help clients understand the design clearly.",
  },
  {
    src: cover("Storytelling copy.webp"),
    alt: "Heritage space visualization — interior",
    title: "Heritage Space Visualization",
    kicker: "Heritage & culture",
    lines: ["Heritage Space", "Visualization"],
    paragraph:
      "Cultural environments recreated with detail, mood, and realism.",
  },
] as const;

export const homeHeroCopy = {
  cta: { label: "View the work", href: "/work" },
};

export const homeAbout = {
  kicker: "About us",
  title: "Blackwhite Viz by Latheif Productions",
  lead:
    "Blackwhite Viz is a Dubai-based 3D rendering company producing photorealistic architectural visualization for villas, towers, malls, and masterplans.",
  body: "We help architects, developers, and design teams present a project with clarity and impact — before a single wall is built.",
};

export const homeServices = [
  {
    slug: "renders",
    title: "3D Renders",
    line: "Exteriors and interiors with the weight of a finished photograph. For architects, developers, and marketing teams who need the image to do the talking.",
    href: "/services/3d-architectural-rendering",
    stills: [
      {
        src: projectSrc("TOWER2", "TOWER DAY RENDER-3 copy.webp"),
        alt: "3D render — tower day",
      },
      {
        src: projectSrc("nshama", "Lobby copy.webp"),
        alt: "3D render — lobby interior",
      },
    ],
  },
  {
    slug: "animations",
    title: "Walkthroughs & Floor Plans",
    line: "Cinematic walkthroughs when a still is not enough — plus 2D and 3D floor plans for clear layout and flow.",
    href: "/services/3d-walkthrough-videos",
    stills: [
      {
        src: projectSrc("WATER VILLA", "Villa V1_01 Final copy.webp"),
        alt: "3D animation still — water villa",
      },
      {
        src: projectSrc("Tower3", "gcam - 1_evening_rev16 copy.webp"),
        alt: "3D animation still — evening tower",
      },
    ],
  },
  {
    slug: "interior-exterior",
    title: "Interior & Exterior",
    line: "Living rooms, lobbies, facades, and street. Day, dusk, and night — the same volume, the hour that sells the plan.",
    href: "/services/3d-interior-renderings",
    stills: [
      {
        src: projectSrc("KENYA-VILLA", "f3 copy.webp"),
        alt: "Exterior — kenya villa day",
      },
      {
        src: projectSrc("INTERIOR", "02 copy.webp"),
        alt: "Interior — living study",
      },
    ],
  },
  {
    slug: "aerial",
    title: "Aerial & Landscape",
    line: "Masterplans, gardens, and the plot from the air. How the project meets the city, the coast, or the sand.",
    href: "/services/landscape-rendering",
    stills: [
      {
        src: projectSrc("Fort", "cam - 2 copy.webp"),
        alt: "Landscape — fort exterior",
      },
      {
        src: projectSrc("nshama", "pool copy.webp"),
        alt: "Landscape — pool still",
      },
    ],
  },
] as const;

export const homeSelection = [
  {
    title: "Water Villa",
    href: "/work/water-villa",
    src: projectSrc("WATER VILLA", "Villa V1_01 Final copy.webp"),
    alt: "Water Villa — coastal exterior",
    tile: "wide" as const,
  },
  {
    title: "Tower Two",
    href: "/work/tower-2",
    src: projectSrc("TOWER2", "TOWER DAY RENDER-3 copy.webp"),
    alt: "Tower Two — day render",
    tile: "tall" as const,
  },
  {
    title: "Kenya Villa",
    href: "/work/kenya-villa",
    src: projectSrc("KENYA-VILLA", "Villa - Night copy.webp"),
    alt: "Kenya Villa — night",
    tile: "third" as const,
  },
  {
    title: "Nshama",
    href: "/work/nshama",
    src: projectSrc("nshama", "Lobby copy.webp"),
    alt: "Nshama — lobby",
    tile: "third" as const,
  },
  {
    title: "Fort",
    href: "/work/fort",
    src: projectSrc("Fort", "cam - 1.jpg copy.webp"),
    alt: "Fort — exterior",
    tile: "third" as const,
  },
] as const;
