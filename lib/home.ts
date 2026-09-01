import { projectSrc } from "@/lib/projects";

const cover = (file: string) => projectSrc("website Cover", file);

export const homeHeroSlides = [
  {
    src: cover("Website cover copy.webp"),
    alt: "Blackwhite Viz — website cover still",
    title: "Blackwhite Viz",
    kicker: "3D Visualization — Dubai",
    lines: ["Blackwhite Viz,", "The work, first."],
    paragraph:
      "Photoreal stills for architects, developers, and design teams — so a project can be seen, sold, and decided before it is built.",
  },
  {
    src: cover("Villa V4_01 Final copy.webp"),
    alt: "Water Villa — coastal exterior still",
    title: "Water Villa",
    kicker: "3D Visualization — Dubai",
    lines: ["Water Villa,", "Coastal light, finished calm."],
    paragraph:
      "A waterfront villa render that shows material, glass, and the exact hour the home should feel finished—before construction begins.",
  },
  {
    src: cover("sunrise copy.webp"),
    alt: "Sunrise architectural visualization",
    title: "Sunrise",
    kicker: "3D Visualization — Dubai",
    lines: ["Sunrise,", "The hour the facade is remembered."],
    paragraph:
      "Early light, warm glass, and a still that holds the first hour of the day—clear enough for approvals and sales.",
  },
  {
    src: cover("Pool lady remove.jpg copy.webp"),
    alt: "Pool — residential amenity still",
    title: "Pool",
    kicker: "3D Visualization — Dubai",
    lines: ["Pool,", "Water, shade, and arrival."],
    paragraph:
      "A pool still that holds amenity and landscape in one frame—clear enough for marketing and design review.",
  },
  {
    src: cover("Remove family.jpg copy.webp"),
    alt: "Residence — exterior still",
    title: "Residence",
    kicker: "3D Visualization — Dubai",
    lines: ["Residence,", "The home, without distraction."],
    paragraph:
      "A residential still focused on architecture and light—so the design can be approved on its own terms.",
  },
  {
    src: cover("Storytelling copy.webp"),
    alt: "Storytelling — interior still",
    title: "Storytelling",
    kicker: "3D Visualization — Dubai",
    lines: ["Storytelling,", "Interior light, lived mood."],
    paragraph:
      "An interior still built for atmosphere—so stakeholders can read the space as a finished photograph.",
  },
] as const;

export const homeHeroCopy = {
  cta: { label: "View the work", href: "/work" },
};

export const homeAbout = {
  kicker: "About us",
  title: "Blackwhite Viz by Latheif Productions",
  lead: "Blackwhite Viz is a 3D visualization studio by Latheif Productions. We work with architects, real estate developers, and design teams to produce photoreal stills, animations, and aerials — so a project can be seen, sold, and decided before it is built.",
  body: "From villas and towers to malls, masterplans, and interiors, each frame is built with the same care as the design itself: light, material, and the hour the building should be remembered in.",
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
    title: "3D Animations",
    line: "Walkthroughs and cinematic sequences when a still is not enough — approach, arrival, and the room as you would move through it.",
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
    href: "/services/3d-architectural-rendering",
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
