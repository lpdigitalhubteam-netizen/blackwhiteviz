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
    slug: "3d-architectural-rendering",
    title: "3D Architectural Rendering",
    kicker: "01 — Rendering",
    line: "A transformation of blueprints into captivating, photorealistic renders.",
    body: "We light, material, and finish exteriors and architecture until the frame can stand in for the building. For architects, developers, and marketing teams who need towers, villas, and commercial volumes to sell with clarity — day through night.",
    hero: "/work/danube-diamondz/01.webp",
    heroAlt: "3D architectural rendering — residential tower at dusk",
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
        src: "/work/farm-house/01.webp",
        alt: "Farm House — approach",
        title: "Farm House",
        href: "/work/farm-house",
        tile: "third",
      },
    ],
  },
  {
    slug: "3d-interior-renderings",
    title: "3D Interior Renderings",
    kicker: "02 — Interior",
    line: "A journey through interiors, marked by meticulous detail and elegance.",
    body: "Living rooms, lobbies, and private suites with furniture, material, and daylight that feel finished. We craft interior stills for sales decks, design approvals, and brand storytelling.",
    hero: "/work/danube-bayz-102/01.webp",
    heroAlt: "3D interior rendering — golden hour living room",
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
        src: "/work/city-mall/02.webp",
        alt: "City Mall — evening interior",
        title: "City Mall",
        href: "/work/city-mall",
        tile: "mid",
      },
      {
        src: "/work/coastal-luxury-villa/02.webp",
        alt: "Coastal Luxury Villa — terrace living",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "mid",
      },
      {
        src: "/work/danube-diamondz/02.webp",
        alt: "Danube Diamondz — amenity interior",
        title: "Danube Diamondz",
        href: "/work/danube-diamondz",
        tile: "third",
      },
    ],
  },
  {
    slug: "interior-design-support",
    title: "Interior Design Support",
    kicker: "03 — Design",
    line: "Strategic interior design support that bridges creative vision and precise 3D visualization.",
    body: "We partner with interior designers and fit-out teams to test layouts, materials, and mood before procurement. Visuals that help clients decide faster — furniture, lighting, and finishes in context.",
    hero: "/work/danube-bayz-102/02.webp",
    heroAlt: "Interior design support — material and furniture study",
    stills: [
      {
        src: "/work/danube-bayz-102/02.webp",
        alt: "Danube Bayz 102 — interior study",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "wide",
      },
      {
        src: "/work/danube-bayz-102/01.webp",
        alt: "Danube Bayz 102 — living room",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "tall",
      },
      {
        src: "/work/coastal-luxury-villa/03.webp",
        alt: "Coastal Luxury Villa — interior",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "mid",
      },
      {
        src: "/work/desert-villa/02.webp",
        alt: "Desert Villa — night interior courtyard",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "mid",
      },
    ],
  },
  {
    slug: "ar-vr",
    title: "AR/VR",
    kicker: "04 — Immersive",
    line: "The future of interactive presentations, where reality meets the virtual world.",
    body: "Immersive experiences for launches and stakeholder reviews. We prepare spatial content that lets clients step into the unbuilt — ideal for sales galleries and remote approvals.",
    hero: "/work/urban-tower/01.webp",
    heroAlt: "AR/VR visualization — tower concept aerial",
    stills: [
      {
        src: "/work/urban-tower/01.webp",
        alt: "Urban Tower — concept aerial",
        title: "Urban Tower",
        href: "/work/urban-tower",
        tile: "wide",
      },
      {
        src: "/work/water-island/01.webp",
        alt: "Water Island — aerial experience",
        title: "Water Island",
        href: "/work/water-island",
        tile: "tall",
      },
      {
        src: "/work/danube-diamondz/01.webp",
        alt: "Danube Diamondz — immersive exterior",
        title: "Danube Diamondz",
        href: "/work/danube-diamondz",
        tile: "mid",
      },
      {
        src: "/work/coastal-luxury-villa/05.webp",
        alt: "Coastal Luxury Villa — aerial",
        title: "Coastal Luxury Villa",
        href: "/work/coastal-luxury-villa",
        tile: "mid",
      },
    ],
  },
  {
    slug: "3d-walkthrough-videos",
    title: "3D Walk-Through Videos",
    kicker: "05 — Film",
    line: "Cinematic experiences that breathe life into your projects.",
    body: "Approach, arrival, and movement through the space. High-end walkthroughs and cinematic sequences for developers and architects who need more than a still — aerials, interiors, and timed reveals.",
    hero: "/work/water-island/01.webp",
    heroAlt: "3D walkthrough — aerial over water and resort",
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
        src: "/work/urban-tower/03.webp",
        alt: "Urban Tower — night",
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
    slug: "2d-3d-floor-plans",
    title: "2D & 3D Floor Plans",
    kicker: "06 — Plans",
    line: "Precise visualizations that offer clarity and insight.",
    body: "Clear 2D and 3D floor plans for marketing and sales — layout, flow, and scale made easy to read. Ideal for brochures, portals, and investor packs where understanding the unit comes first.",
    hero: "/work/city-mall/03.webp",
    heroAlt: "2D and 3D floor plan visualization",
    stills: [
      {
        src: "/work/city-mall/03.webp",
        alt: "City Mall — plan view still",
        title: "City Mall",
        href: "/work/city-mall",
        tile: "wide",
      },
      {
        src: "/work/danube-bayz-102/04.webp",
        alt: "Danube Bayz 102 — spatial layout",
        title: "Danube Bayz 102",
        href: "/work/danube-bayz-102",
        tile: "tall",
      },
      {
        src: "/work/farm-house/03.webp",
        alt: "Farm House — plan context",
        title: "Farm House",
        href: "/work/farm-house",
        tile: "mid",
      },
      {
        src: "/work/desert-villa/04.webp",
        alt: "Desert Villa — layout study",
        title: "Desert Villa",
        href: "/work/desert-villa",
        tile: "mid",
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
