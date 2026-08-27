import { projectSrc } from "@/lib/projects";

export const homeHeroSlides = [
  {
    src: projectSrc("WATER VILLA", "Villa V1_01 Final copy.webp"),
    alt: "Water Villa — photoreal coastal villa exterior",
    title: "Water Villa",
    kicker: "3D Visualization — Dubai",
    lines: ["Water Villa,", "Coastal light, finished calm."],
    paragraph:
      "A waterfront villa render that shows material, glass, and the exact hour the home should feel finished—before construction begins.",
  },
  {
    src: projectSrc("TOWER2", "TOWER DAY RENDER-3 copy.webp"),
    alt: "Tower — day architectural visualization",
    title: "Tower Day",
    kicker: "3D Visualization — Dubai",
    lines: ["Tower Day,", "Clear form under hard light."],
    paragraph:
      "Daytime tower visualization with crisp silhouette and facade detail—built so developers and marketing teams can present scale with confidence.",
  },
  {
    src: projectSrc("concept tower", "sp_2_detail_final.webp"),
    alt: "Concept Tower — detail architectural still",
    title: "Concept Tower",
    kicker: "3D Visualization — Dubai",
    lines: ["Concept Tower,", "Detail that sells the plan."],
    paragraph:
      "Close architectural detail with glass, depth, and material intent—so stakeholders can read the design before it is built.",
  },
  {
    src: projectSrc("KENYA-VILLA", "Villa - Night copy.webp"),
    alt: "Kenya Villa — night exterior visualization",
    title: "Kenya Villa",
    kicker: "3D Visualization — Africa",
    lines: ["Kenya Villa,", "Night volume, warm arrival."],
    paragraph:
      "A night villa scene built for atmosphere—glow, landscape, and lived-in warmth that helps clients approve the design early.",
  },
  {
    src: projectSrc("Fort", "cam - 1.jpg copy.webp"),
    alt: "Fort — exterior architectural visualization",
    title: "Fort",
    kicker: "3D Visualization — Dubai",
    lines: ["Fort,", "Mass, light, and place."],
    paragraph:
      "Exterior visualization that carries structure and setting in one frame—clear enough for sales, approvals, and design review.",
  },
  {
    src: projectSrc("nshama", "Lobby copy.webp"),
    alt: "Nshama — lobby interior visualization",
    title: "Nshama Lobby",
    kicker: "3D Visualization — Dubai",
    lines: ["Nshama Lobby,", "Interior light, arrival mood."],
    paragraph:
      "Interior lobby visualization with materials and daylight that feel finished—built as a photoreal still for faster stakeholder decisions.",
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
