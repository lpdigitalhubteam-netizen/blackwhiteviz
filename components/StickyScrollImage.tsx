"use client";

import Image from "next/image";

type StickyScrollImageProps = {
  src: string;
  alt: string;
};

/**
 * Framed right-column image (not full section).
 * Desktop: background-attachment fixed — page scrolls above a still photo.
 */
export function StickyScrollImage({ src, alt }: StickyScrollImageProps) {
  return (
    <div className="bg-background px-5 py-14 md:flex md:items-start md:justify-end md:px-10 md:py-20 lg:px-14">
      {/* Desktop: framed window onto a fixed under-page image */}
      <div
        role="img"
        aria-label={alt}
        className="hidden aspect-[5/4] w-full max-w-[32rem] bg-cover bg-center bg-no-repeat md:block md:bg-fixed lg:max-w-[36rem]"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Mobile: normal contained image */}
      <div className="relative aspect-[5/4] w-full overflow-hidden md:hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
