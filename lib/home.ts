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
  {
    src: cover("balcony copy.webp"),
    alt: "Interior balcony 3D rendering",
    title: "Interior Balcony",
    kicker: "Interior",
    lines: ["Interior", "Balcony Views"],
    paragraph:
      "Private terraces and living spaces rendered with light, material, and outlook.",
  },
  {
    src: cover("cam - 2 copy.webp"),
    alt: "Fort 3D rendering — exterior",
    title: "Fort",
    kicker: "Exterior rendering",
    lines: ["Fort", "3D Rendering"],
    paragraph:
      "Mass, light, and place — exterior cameras that hold the fort in clear volume.",
  },
] as const;

export const homeHeroCopy = {
  cta: { label: "View the work", href: "/work" },
};

export const homeAbout = {
  kicker: "About Blackwhite Viz",
  title: "We are BLACKWHITE Viz",
  lead:
    "We specialize in delivering 3D visualisation solutions that transform ideas into striking visual experiences. As one of the leading 3D visualisation companies, we combine creativity and precision to bring your concepts to life through advanced 3D rendering services in Dubai and beyond.",
  highlights: [
    {
      label: "Exterior 3D Modeling and Rendering",
      href: "/services/3d-architectural-rendering",
    },
    {
      label: "Interior Design",
      href: "/services/interior-design-support",
    },
    {
      label: "360 Panorama",
      href: "/services/360-panorama",
    },
  ],
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
    title: "3D Walkthrough Videos",
    line: "Cinematic walkthroughs when a still is not enough.",
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
    title: "360 Panorama",
    line: "Look around a room, amenity, or site from one still. Built for virtual tours, galleries, and immersive sales decks.",
    href: "/services/360-panorama",
    stills: [
      {
        src: projectSrc("WATER VILLA", "Villa V4_01 Final copy.webp"),
        alt: "360 panorama — Water Villa",
      },
      {
        src: projectSrc("KENYA-VILLA", "Villa - Night copy.webp"),
        alt: "360 panorama — Kenya Villa",
      },
    ],
  },
] as const;

export const homeSelection = [
  {
    title: "Fort",
    href: "/work/fort",
    src: projectSrc("Fort", "cam - 1.jpg copy.webp"),
    alt: "Fort — exterior",
    tile: "wide" as const,
  },
  {
    title: "Tower Three",
    href: "/work/tower-3",
    src: projectSrc("Tower3", "cam - 012_ev_final copy.webp"),
    alt: "Tower Three — evening camera 012",
    tile: "tall" as const,
  },
  {
    title: "Heritage",
    href: "/work/heritage",
    src: projectSrc("heretage", "Storytelling copy.webp"),
    alt: "Heritage — storytelling interior",
    tile: "third" as const,
  },
  {
    title: "Interior Studies",
    href: "/work/interior",
    src: projectSrc("INTERIOR", "v2_2 copy.webp"),
    alt: "Interior — variant v2",
    tile: "third" as const,
  },
  {
    title: "Concept Tower",
    href: "/work/concept-tower",
    src: projectSrc("concept tower", "sp_2_detail_final.webp"),
    alt: "Concept Tower — detail still",
    tile: "third" as const,
  },
] as const;
