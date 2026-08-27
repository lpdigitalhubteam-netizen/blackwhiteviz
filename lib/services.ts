import { projectSrc } from "@/lib/projects";

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
    hero: projectSrc("TOWER2", "TOWER DAY RENDER-3 copy.webp"),
    heroAlt: "3D architectural rendering — tower day",
    stills: [
      {
        src: projectSrc("TOWER2", "TOWER DAY RENDER-3 copy.webp"),
        alt: "Tower Two — day render",
        title: "Tower Two",
        href: "/work/tower-2",
        tile: "tall",
      },
      {
        src: projectSrc("WATER VILLA", "Villa V1_01 Final copy.webp"),
        alt: "Water Villa — exterior",
        title: "Water Villa",
        href: "/work/water-villa",
        tile: "wide",
      },
      {
        src: projectSrc("TOWER1", "Tower view 01_02 copy.webp"),
        alt: "Tower One — exterior view",
        title: "Tower One",
        href: "/work/tower-1",
        tile: "mid",
      },
      {
        src: projectSrc("concept tower", "sp_2_detail_final.webp"),
        alt: "Concept Tower — detail",
        title: "Concept Tower",
        href: "/work/concept-tower",
        tile: "mid",
      },
      {
        src: projectSrc("Fort", "cam - 1.jpg copy.webp"),
        alt: "Fort — exterior",
        title: "Fort",
        href: "/work/fort",
        tile: "third",
      },
      {
        src: projectSrc("KENYA-VILLA", "f3 copy.webp"),
        alt: "Kenya Villa — day",
        title: "Kenya Villa",
        href: "/work/kenya-villa",
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
    hero: projectSrc("nshama", "Lobby copy.webp"),
    heroAlt: "3D interior rendering — lobby",
    stills: [
      {
        src: projectSrc("nshama", "Lobby copy.webp"),
        alt: "Nshama — lobby",
        title: "Nshama",
        href: "/work/nshama",
        tile: "wide",
      },
      {
        src: projectSrc("nshama", "Living Room  copy.webp"),
        alt: "Nshama — living room",
        title: "Nshama",
        href: "/work/nshama",
        tile: "tall",
      },
      {
        src: projectSrc("INTERIOR", "02 copy.webp"),
        alt: "Interior study 02",
        title: "Interior Studies",
        href: "/work/interior",
        tile: "mid",
      },
      {
        src: projectSrc("INTERIOR", "8 copy.webp"),
        alt: "Interior study 08",
        title: "Interior Studies",
        href: "/work/interior",
        tile: "mid",
      },
      {
        src: projectSrc("heretage", "Majlis copy.webp"),
        alt: "Heritage — majlis",
        title: "Heritage",
        href: "/work/heritage",
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
    hero: projectSrc("INTERIOR", "02 copy.webp"),
    heroAlt: "Interior design support — material study",
    stills: [
      {
        src: projectSrc("INTERIOR", "02 copy.webp"),
        alt: "Interior study 02",
        title: "Interior Studies",
        href: "/work/interior",
        tile: "wide",
      },
      {
        src: projectSrc("nshama", "KIDS ROOM-2 copy.webp"),
        alt: "Nshama — kids room",
        title: "Nshama",
        href: "/work/nshama",
        tile: "tall",
      },
      {
        src: projectSrc("heretage", "Storytelling copy.webp"),
        alt: "Heritage — storytelling",
        title: "Heritage",
        href: "/work/heritage",
        tile: "mid",
      },
      {
        src: projectSrc("Tower3", "MEETING_CShading_LightMix copy.webp"),
        alt: "Tower Three — meeting room",
        title: "Tower Three",
        href: "/work/tower-3",
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
    hero: projectSrc("TOWER1", "Tower view 01_02 copy.webp"),
    heroAlt: "AR/VR visualization — tower view",
    stills: [
      {
        src: projectSrc("TOWER1", "Tower view 01_02 copy.webp"),
        alt: "Tower One — exterior",
        title: "Tower One",
        href: "/work/tower-1",
        tile: "wide",
      },
      {
        src: projectSrc("WATER VILLA", "Villa V2_01 Final copy.webp"),
        alt: "Water Villa — exterior",
        title: "Water Villa",
        href: "/work/water-villa",
        tile: "tall",
      },
      {
        src: projectSrc("concept tower", "sp_3_detail_final.webp"),
        alt: "Concept Tower — detail",
        title: "Concept Tower",
        href: "/work/concept-tower",
        tile: "mid",
      },
      {
        src: projectSrc("Tower3", "CLUBHOUSE copy.webp"),
        alt: "Tower Three — clubhouse",
        title: "Tower Three",
        href: "/work/tower-3",
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
    hero: projectSrc("Tower3", "gcam - 1_evening_rev16 copy.webp"),
    heroAlt: "3D walkthrough — evening tower",
    video: "/film/showreel.mp4",
    stills: [
      {
        src: projectSrc("Tower3", "gcam - 1_evening_rev16 copy.webp"),
        alt: "Tower Three — evening",
        title: "Tower Three",
        href: "/work/tower-3",
        tile: "full",
      },
      {
        src: projectSrc("TOWER2", "TOWER NIGHT VIEW copy.webp"),
        alt: "Tower Two — night",
        title: "Tower Two",
        href: "/work/tower-2",
        tile: "wide",
      },
      {
        src: projectSrc("WATER VILLA", "Villa V4 Night_01 copy.webp"),
        alt: "Water Villa — night",
        title: "Water Villa",
        href: "/work/water-villa",
        tile: "tall",
      },
      {
        src: projectSrc("nshama", "balcony copy.webp"),
        alt: "Nshama — balcony",
        title: "Nshama",
        href: "/work/nshama",
        tile: "mid",
      },
      {
        src: projectSrc("Fort", "cam - 4.jpg copy.webp"),
        alt: "Fort — exterior",
        title: "Fort",
        href: "/work/fort",
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
    hero: projectSrc("nshama", "Living Room  copy.webp"),
    heroAlt: "2D and 3D floor plan visualization context",
    stills: [
      {
        src: projectSrc("nshama", "Living Room  copy.webp"),
        alt: "Nshama — living room",
        title: "Nshama",
        href: "/work/nshama",
        tile: "wide",
      },
      {
        src: projectSrc("INTERIOR", "v2_2 copy.webp"),
        alt: "Interior — layout study",
        title: "Interior Studies",
        href: "/work/interior",
        tile: "tall",
      },
      {
        src: projectSrc("heretage", "11_p.rev copy.webp"),
        alt: "Heritage — interior",
        title: "Heritage",
        href: "/work/heritage",
        tile: "mid",
      },
      {
        src: projectSrc("KENYA-VILLA", "n_4 copy.webp"),
        alt: "Kenya Villa — dusk",
        title: "Kenya Villa",
        href: "/work/kenya-villa",
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
