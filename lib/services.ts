export type ServiceStill = {
  src: string;
  alt: string;
  title: string;
  href: string;
  tile: "full" | "wide" | "mid" | "third" | "tall";
};

export type ServicePage = {
  slug: string;
  title: string;
  kicker: string;
  line: string;
  body: string;
  hero: string;
  heroAlt: string;
  video?: string;
  stills: ServiceStill[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "3d-renders",
    title: "3D Renders",
    kicker: "01 — Stills",
    line: "Exteriors and interiors with the weight of a finished photograph.",
    body: "We light, material, and finish a frame until it can stand in for the building. For architects, developers, and marketing teams who need the image to do the talking — towers, villas, malls, and rooms, day through night.",
    hero: "/work/danube-diamondz/01.webp",
    heroAlt: "3D render — residential tower at dusk",
    stills: [
      {
        src: "/work/danube-diamondz/01.webp",
        alt: "Danube Diamondz — dusk elevation",
        title: "Danube Diamondz",
        href: "/work/danube-diamondz",
        tile: "tall",
      },
      {
        src: "/work/coastal-luxury-villa/01.webp",
        alt: "Coastal Luxury Villa — dusk waterfront",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "wide",
      },
      {
        src: "/work/urban-tower/02.webp",
        alt: "Urban Tower — street elevation",
        title: "Urban Tower",
        href: "/work/urban-tower",
        tile: "mid",
      },
      {
        src: "/work/city-mall/01.webp",
        alt: "City Mall — night facade",
        title: "City Mall",
        href: "/work/city-mall",
        tile: "mid",
      },
      {
        src: "/work/desert-villa/01.webp",
        alt: "Desert Villa — day",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "third",
      },
      {
        src: "/work/danube-bayz-102/01.webp",
        alt: "Danube Bayz 102 — golden hour",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "third",
      },
      {
        src: "/work/farm-house/01.webp",
        alt: "Farm House — approach",
        title: "Farm House",
        href: "/work/farm-house",
        tile: "third",
      },
    ],
  },
  {
    slug: "3d-animations",
    title: "3D Animations",
    kicker: "02 — Film",
    line: "Walkthroughs and cinematic sequences when a still is not enough.",
    body: "Approach, arrival, and the room as you would move through it. We produce high-end animations for developers and architects who need the extra mile — aerials, interiors, and timed reveals.",
    hero: "/work/water-island/01.webp",
    heroAlt: "Animation still — aerial over water and resort",
    video: "/film/showreel.mp4",
    stills: [
      {
        src: "/work/water-island/01.webp",
        alt: "Water Island — aerial",
        title: "Water Island",
        href: "/work/water-island",
        tile: "full",
      },
      {
        src: "/work/urban-tower/01.webp",
        alt: "Urban Tower — concept aerial",
        title: "Urban Tower",
        href: "/work/urban-tower",
        tile: "wide",
      },
      {
        src: "/work/coastal-luxury-villa/05.webp",
        alt: "Coastal Luxury Villa — aerial",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "tall",
      },
      {
        src: "/work/city-mall/04.webp",
        alt: "City Mall — day exterior",
        title: "City Mall",
        href: "/work/city-mall",
        tile: "mid",
      },
      {
        src: "/work/danube-diamondz/04.webp",
        alt: "Danube Diamondz — night",
        title: "Danube Diamondz",
        href: "/work/danube-diamondz",
        tile: "mid",
      },
    ],
  },
  {
    slug: "interior-exterior",
    title: "Interior & Exterior",
    kicker: "03 — Space",
    line: "Living rooms, lobbies, facades, and street. Day, dusk, and night.",
    body: "The same volume, the hour that sells the plan. Interiors with furniture, material, and daylight. Exteriors with wet paving, glass, and the city around them.",
    hero: "/work/danube-bayz-102/01.webp",
    heroAlt: "Interior visualization — golden hour living room",
    stills: [
      {
        src: "/work/danube-bayz-102/01.webp",
        alt: "Danube Bayz 102 — living room",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "wide",
      },
      {
        src: "/work/danube-bayz-102/03.webp",
        alt: "Danube Bayz 102 — night living",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "tall",
      },
      {
        src: "/work/coastal-luxury-villa/02.webp",
        alt: "Coastal Luxury Villa — terrace",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "mid",
      },
      {
        src: "/work/city-mall/02.webp",
        alt: "City Mall — evening interior",
        title: "City Mall",
        href: "/work/city-mall",
        tile: "mid",
      },
      {
        src: "/work/urban-tower/03.webp",
        alt: "Urban Tower — night",
        title: "Urban Tower",
        href: "/work/urban-tower",
        tile: "third",
      },
      {
        src: "/work/danube-diamondz/02.webp",
        alt: "Danube Diamondz — amenity deck",
        title: "Danube Diamondz",
        href: "/work/danube-diamondz",
        tile: "third",
      },
      {
        src: "/work/desert-villa/02.webp",
        alt: "Desert Villa — night courtyard",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "third",
      },
    ],
  },
  {
    slug: "aerial-landscape",
    title: "Aerial & Landscape",
    kicker: "04 — Ground",
    line: "Masterplans, gardens, and the plot from the air.",
    body: "How the project meets the city, the coast, or the sand. Aerials for scale. Landscape stills for planted ground, water, and the edge of the building.",
    hero: "/work/farm-house/01.webp",
    heroAlt: "Landscape visualization — farm house in planted ground",
    stills: [
      {
        src: "/work/water-island/01.webp",
        alt: "Water Island — masterplan aerial",
        title: "Water Island",
        href: "/work/water-island",
        tile: "full",
      },
      {
        src: "/work/farm-house/01.webp",
        alt: "Farm House — planted ground",
        title: "Farm House",
        href: "/work/farm-house",
        tile: "wide",
      },
      {
        src: "/work/desert-villa/01.webp",
        alt: "Desert Villa — dunes",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "tall",
      },
      {
        src: "/work/water-island/04.webp",
        alt: "Water Island — landscaped water",
        title: "Water Island",
        href: "/work/water-island",
        tile: "mid",
      },
      {
        src: "/work/farm-house/05.webp",
        alt: "Farm House — aerial compound",
        title: "Farm House",
        href: "/work/farm-house",
        tile: "mid",
      },
      {
        src: "/work/coastal-luxury-villa/05.webp",
        alt: "Coastal Luxury Villa — aerial plot",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "third",
      },
      {
        src: "/work/urban-tower/01.webp",
        alt: "Urban Tower — aerial",
        title: "Urban Tower",
        href: "/work/urban-tower",
        tile: "third",
      },
      {
        src: "/work/desert-villa/03.webp",
        alt: "Desert Villa — sunrise",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "third",
      },
    ],
  },
];

export function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getAdjacentService(slug: string) {
  const index = servicePages.findIndex((service) => service.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: servicePages[index - 1] ?? servicePages[servicePages.length - 1],
    next: servicePages[index + 1] ?? servicePages[0],
  };
}
