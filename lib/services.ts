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
  cardTitle: [string, string];
  cardLine: string;
  metaTitle: string;
  metaDescription: string;
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
    cardTitle: ["3D Architectural", "Rendering"],
    cardLine:
      "Photoreal exterior stills for villas, towers, and masterplans before a wall is built.",
    metaTitle: "3D Exterior Rendering Services Dubai | Blackwhite Viz",
    metaDescription:
      "Exterior rendering services for architects and developers — photoreal villa and building exteriors that sell a project before it's built.",
    kicker: "01 — Rendering",
    line: "Our exterior rendering services turn blueprints into photoreal stills — from villa exterior rendering in Dubai to towers and masterplans.",
    body: "Built for architects who need a render that holds up to scrutiny and closes a sale. We light, material, and finish exteriors until the frame can stand in for the building — day through night.",
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
    slug: "landscape-rendering",
    title: "Landscape Rendering",
    cardTitle: ["Landscape", "Rendering"],
    cardLine:
      "Pools, gardens, and site context rendered with the same care as the architecture.",
    metaTitle: "Landscape 3D Rendering for Developers | Blackwhite Viz",
    metaDescription:
      "Landscape 3D rendering for developers — amenity, greenery, and site context rendered with the same precision as the architecture.",
    kicker: "02 — Landscape",
    line: "Landscape 3D rendering for developers brings pools, gardens, and site context into the same frame as the architecture.",
    body: "So the full picture sells, not just the building. We render amenity, greenery, and surroundings with the same precision as the architecture — for masterplans, villas, and towers across Dubai and the Gulf.",
    hero: projectSrc("Fort", "cam - 2 copy.webp"),
    heroAlt: "Landscape 3D rendering — site context and greenery",
    stills: [
      {
        src: projectSrc("Fort", "cam - 2 copy.webp"),
        alt: "Fort — landscape context",
        title: "Fort",
        href: "/work/fort",
        tile: "wide",
      },
      {
        src: projectSrc("nshama", "pool copy.webp"),
        alt: "Nshama — pool and landscape",
        title: "Nshama",
        href: "/work/nshama",
        tile: "tall",
      },
      {
        src: projectSrc("WATER VILLA", "Villa V1_01 Final copy.webp"),
        alt: "Water Villa — coastal landscape",
        title: "Water Villa",
        href: "/work/water-villa",
        tile: "mid",
      },
      {
        src: projectSrc("KENYA-VILLA", "f3 copy.webp"),
        alt: "Kenya Villa — garden context",
        title: "Kenya Villa",
        href: "/work/kenya-villa",
        tile: "mid",
      },
    ],
  },
  {
    slug: "3d-interior-renderings",
    title: "3D Interior Renderings",
    cardTitle: ["3D Interior", "Renderings"],
    cardLine:
      "Interior stills with material, light, and atmosphere ready to approve.",
    metaTitle: "3D Interior Rendering Services | Blackwhite Viz",
    metaDescription:
      "3D interior rendering services for real estate — photorealistic interiors that let clients read a space as a finished photograph.",
    kicker: "03 — Interior",
    line: "We produce interior rendering for real estate that captures material, light, and atmosphere with precision.",
    body: "So stakeholders can approve a design on sight, not on imagination. Living rooms, lobbies, and private suites with furniture, material, and daylight that feel finished — for sales decks, design approvals, and brand storytelling.",
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
    cardTitle: ["Interior Design", "Support"],
    cardLine:
      "Support for design teams testing layout, material, and lighting before production.",
    metaTitle: "Interior Design Support Services | Blackwhite Viz",
    metaDescription:
      "Interior design support services that bridge creative vision and precise 3D visualization for design teams and developers.",
    kicker: "04 — Design",
    line: "Our interior design support services bridge concept and visualization.",
    body: "Helping design teams test material, layout, and lighting decisions before committing to production. We partner with interior designers and fit-out teams to test layouts, materials, and mood before procurement.",
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
    cardTitle: ["AR / VR", "Visualization"],
    cardLine:
      "Immersive AR and VR that let buyers step into a project before it is built.",
    metaTitle: "AR VR Real Estate Visualization Dubai | Blackwhite Viz",
    metaDescription:
      "AR VR real estate visualization that lets buyers and stakeholders step into a project before it's built.",
    kicker: "05 — Immersive",
    line: "AR VR real estate visualization takes interior and exterior renders further.",
    body: "Letting buyers and stakeholders walk through a space interactively, before construction begins. Immersive experiences for launches and stakeholder reviews — ideal for sales galleries and remote approvals.",
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
    title: "3D Walkthrough Videos / 2D Floor Plans",
    cardTitle: ["3D Walkthrough Videos", "2D Floor Plans"],
    cardLine:
      "Walkthrough videos and 2D floor plans that show a project in motion.",
    metaTitle: "3D Walkthrough Video & 2D Floor Plans Dubai | Blackwhite Viz",
    metaDescription:
      "3D walkthrough video, architectural animation, and 2D floor plans in Dubai — cinematic tours and clear layouts for marketing and sales.",
    kicker: "06 — Film & Plans",
    line: "Walkthrough videos and floor plans that bring a project to life — in motion and on the page.",
    body: "Our 3D walkthrough and architectural animation services are built for developer marketing, sales presentations, and investor decks. We also produce 2D floor plans that give buyers a clear read on layout and flow — precise, polished, and ready for brochures, portals, and sales galleries.",
    hero: projectSrc("Tower3", "gcam - 1_evening_rev16 copy.webp"),
    heroAlt: "3D walkthrough and floor plan visualization",
    video: "/film/showreel.mp4",
    stills: [
      {
        src: projectSrc("Tower3", "gcam - 1_evening_rev16 copy.webp"),
        alt: "Tower Three — evening walkthrough still",
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
        src: projectSrc("nshama", "Living Room  copy.webp"),
        alt: "Nshama — living room floor plan context",
        title: "Nshama",
        href: "/work/nshama",
        tile: "tall",
      },
      {
        src: projectSrc("INTERIOR", "v2_2 copy.webp"),
        alt: "Interior — layout study",
        title: "Interior Studies",
        href: "/work/interior",
        tile: "mid",
      },
      {
        src: projectSrc("WATER VILLA", "Villa V4 Night_01 copy.webp"),
        alt: "Water Villa — night",
        title: "Water Villa",
        href: "/work/water-villa",
        tile: "mid",
      },
      {
        src: projectSrc("heretage", "11_p.rev copy.webp"),
        alt: "Heritage — interior",
        title: "Heritage",
        href: "/work/heritage",
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
