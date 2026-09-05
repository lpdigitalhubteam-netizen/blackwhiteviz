import localFont from "next/font/local";

export const averta = localFont({
  src: [
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FONT - Averta/FOT - Averta/AvertaStd-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-averta",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});
