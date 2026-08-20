export const site = {
  name: "Blackwhite Viz",
  wordmark: "BLACKWHITE VIZ",
  parent: "Latheif Productions",
  regions: ["UAE", "Africa", "Sri Lanka", "India"] as const,
  logo: {
    src: "/logo/blackwhite_whitelogo.webp",
    alt: "Blackwhite Viz",
    width: 3039,
    height: 2515,
    version: "1",
  },
  tagline: "Design. Photoreal visuals. Impact that lasts.",
  statement: [
    "We turn unbuilt space",
    "into images you can",
    "decide on.",
  ],
  studio: {
    lead: "A Dubai visualization studio for architects, developers, and designers who need the space to feel finished before it exists.",
    body: "We model, light, and finish interiors, exteriors, and landscapes with the same care as the design itself. The site is the work. The words stay short.",
  },
  contact: {
    email: "hello@blackwhiteviz.com",
    phone: "+971 50 214 8129",
    phoneHref: "tel:+971502148129",
    phones: [
      { number: "+971 50 214 8129", href: "tel:+971502148129" },
      { number: "+971 50 216 3873", href: "tel:+971502163873" },
    ],
    address: "112 Al Bakhit Center, Abu Baker Al Siddique Rd, Deira, Dubai, UAE",
  },
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/blackwhiteviz",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/blackwhiteviz/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/BlackWhiteViz",
    },
  ] as const,
};

export const nav = [
  { href: "/", label: "Home", index: "01" },
  { href: "/work", label: "Work", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/services", label: "Services", index: "04" },
  { href: "/blog", label: "Blogs", index: "05" },
  { href: "/contact", label: "Contact", index: "06" },
] as const;

export const services = [
  {
    slug: "exterior",
    title: "Exterior",
    line: "Facades, podiums, street life, and the hour the building should be remembered in.",
    alt: "Exterior — dusk tower facade with wet paving and warm lobby glow",
    src: "/work/urban-tower/03.webp",
    ratio: "16/9",
  },
  {
    slug: "interior",
    title: "Interior",
    line: "Rooms with weight. Materials, daylight, and the quiet between furniture.",
    alt: "Interior — penthouse living room, late afternoon, stone and linen",
    src: "/work/danube-bayz-102/01.webp",
    ratio: "16/9",
  },
  {
    slug: "landscape",
    title: "Landscape",
    line: "Ground, water, canopy. How the plot meets the city or the coast.",
    alt: "Landscape — villa garden terraces stepping down to water",
    src: "/work/farm-house/01.webp",
    ratio: "16/9",
  },
  {
    slug: "film",
    title: "Film",
    line: "Walkthroughs and aerials when a still is not enough.",
    alt: "Film — aerial approach over a coastal masterplan at sunrise",
    src: "/work/water-island/01.webp",
    ratio: "21/9",
  },
] as const;
