import type { Metadata } from "next";

export function absoluteTitle(title: string): Metadata["title"] {
  return { absolute: title };
}

export const seo = {
  home: {
    title: "3D Architectural Rendering Dubai | Blackwhite Viz",
    description:
      "Blackwhite Viz is a 3D rendering company in Dubai delivering photorealistic architectural visualization for architects, developers, and design teams.",
    intro:
      "Blackwhite Viz is a Dubai-based 3D rendering company producing photorealistic architectural visualization for villas, towers, malls, and masterplans. We help architects, developers, and design teams present a project with clarity and impact — before a single wall is built.",
  },
  about: {
    title: "Architectural Visualization Company UAE | Blackwhite Viz",
    description:
      "Blackwhite Viz is an architectural visualization company in the UAE, part of Latheif Productions, serving architects and developers across the Gulf, Africa, and South Asia.",
    intro:
      "Blackwhite Viz is an architectural visualization company by Latheif Productions, working with architects, real estate developers, and design teams across the UAE. Every still, animation, and aerial is built with the same care as the design itself.",
  },
  services: {
    title: "3D Rendering Services for Architects Dubai | Blackwhite Viz",
    description:
      "Explore 3D rendering services for architects in Dubai — exterior, interior, landscape, walkthroughs, floor plans, and AR/VR visualization.",
    intro:
      "From exterior and interior renders to walkthrough animations and floor plans, our 3D rendering services help architects and developers in Dubai turn drawings into decisions.",
  },
  work: {
    title: "Real Estate Rendering Company Dubai — Our Work | Blackwhite Viz",
    description:
      "See photoreal renders for real estate sales — villas, towers, and masterplans by Blackwhite Viz, a real estate rendering company in Dubai.",
    intro:
      "A selection of photoreal renders for real estate sales and marketing — from waterfront villas to towers and masterplans, produced by our real estate rendering company in Dubai.",
  },
  contact: {
    title: "Contact | 3D Rendering Company UAE | Blackwhite Viz",
    description:
      "Get in touch with Blackwhite Viz, a 3D rendering company in the UAE — send your drawings and start a new project.",
    intro:
      "Blackwhite Viz is a 3D rendering company serving clients across the UAE, Africa, and South Asia. Send your drawings — we'll take it from there.",
  },
} as const;
