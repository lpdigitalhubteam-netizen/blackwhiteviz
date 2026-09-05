import localFont from "next/font/local";

export const averta = localFont({
  src: [
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-averta",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});
