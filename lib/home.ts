export const homeHeroSlides = [
  {
    src: "/work/coastal-luxury-villa/01.webp",
    alt: "Coastal Luxury Villa — dusk waterfront",
    title: "Coastal Luxury Villa",
  },
  {
    src: "/work/water-island/01.webp",
    alt: "Water Island — aerial masterplan",
    title: "Water Island",
  },
  {
    src: "/work/danube-diamondz/01.webp",
    alt: "Danube Diamondz — dusk tower",
    title: "Danube Diamondz",
  },
  {
    src: "/work/desert-villa/01.webp",
    alt: "Desert Villa — day in the dunes",
    title: "Desert Villa",
  },
  {
    src: "/work/city-mall/01.webp",
    alt: "City Mall — night facade",
    title: "City Mall",
  },
  {
    src: "/work/danube-bayz-102/01.webp",
    alt: "Danube Bayz 102 — golden hour interior",
    title: "Danube Bayz 102",
  },
] as const;

export const homeHeroCopy = {
  kicker: "3D Visualization — Dubai",
  lines: ["The unbuilt,", "seen as finished."],
  cta: { label: "View the work", href: "/work" },
};

export const homeAbout = {
  kicker: "About us",
  title: "A visualization studio in Dubai",
  lead: "Blackwhite Viz is not only a 3D rendering studio. We work with architects, real estate developers, and design teams to produce photoreal stills, animations, and aerials — so a project can be seen, sold, and decided before it is built.",
  body: "From villas and towers to malls, masterplans, and interiors, each frame is built with the same care as the design itself: light, material, and the hour the building should be remembered in.",
};

export const homeServices = [
  {
    slug: "renders",
    title: "3D Renders",
    line: "Exteriors and interiors with the weight of a finished photograph. For architects, developers, and marketing teams who need the image to do the talking.",
    href: "/services/3d-renders",
    stills: [
      {
        src: "/work/water-island/01.webp",
        alt: "3D render — aerial over water and resort",
      },
      {
        src: "/work/danube-bayz-102/01.webp",
        alt: "3D render — golden hour interior",
      },
    ],
  },
  {
    slug: "animations",
    title: "3D Animations",
    line: "Walkthroughs and cinematic sequences when a still is not enough — approach, arrival, and the room as you would move through it.",
    href: "/services/3d-animations",
    stills: [
      {
        src: "/work/water-island/02.webp",
        alt: "3D animation still — marina promenade",
      },
      {
        src: "/work/coastal-luxury-villa/01.webp",
        alt: "3D animation still — coastal villa dusk",
      },
    ],
  },
  {
    slug: "interior-exterior",
    title: "Interior & Exterior",
    line: "Living rooms, lobbies, facades, and street. Day, dusk, and night — the same volume, the hour that sells the plan.",
    href: "/services/interior-exterior",
    stills: [
      {
        src: "/work/desert-villa/01.webp",
        alt: "Exterior — desert villa day",
      },
      {
        src: "/work/danube-bayz-102/02.webp",
        alt: "Interior — living room",
      },
    ],
  },
  {
    slug: "aerial",
    title: "Aerial & Landscape",
    line: "Masterplans, gardens, and the plot from the air. How the project meets the city, the coast, or the sand.",
    href: "/services/aerial-landscape",
    stills: [
      {
        src: "/work/farm-house/01.webp",
        alt: "Landscape — farm house in planted ground",
      },
      {
        src: "/work/water-island/04.webp",
        alt: "Aerial — landscaped water",
      },
    ],
  },
] as const;

export const homeSelection = [
  {
    title: "Coastal Luxury Villa",
    href: "/work/coastal-luxury-villa",
    src: "/work/coastal-luxury-villa/01.webp",
    alt: "Coastal Luxury Villa — dusk waterfront",
    tile: "wide" as const,
  },
  {
    title: "Urban Tower",
    href: "/work/urban-tower",
    src: "/work/urban-tower/01.webp",
    alt: "Urban Tower — aerial concept",
    tile: "tall" as const,
  },
  {
    title: "Water Island",
    href: "/work/water-island",
    src: "/work/water-island/02.webp",
    alt: "Water Island — marina promenade",
    tile: "third" as const,
  },
  {
    title: "City Mall",
    href: "/work/city-mall",
    src: "/work/city-mall/01.webp",
    alt: "City Mall — night facade",
    tile: "third" as const,
  },
  {
    title: "Danube Diamondz",
    href: "/work/danube-diamondz",
    src: "/work/danube-diamondz/02.webp",
    alt: "Danube Diamondz — amenity deck",
    tile: "third" as const,
  },
] as const;
