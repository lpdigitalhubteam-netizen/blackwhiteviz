"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useLightbox,
  type LightboxItem,
} from "@/components/Lightbox";
import { tileClass, type Frame } from "@/lib/projects";

type PlaceProps = Frame & {
  className?: string;
  index?: string;
  href?: string;
  hover?: string;
  fill?: boolean;
  fit?: boolean;
  /** Fit the full image inside the cell without cropping. */
  contain?: boolean;
  /** No ring / edge border. */
  bare?: boolean;
  /** When set, full-view can step through these images. */
  gallery?: LightboxItem[];
};

export function Place({
  alt,
  ratio,
  tile,
  src,
  className = "",
  index,
  href,
  hover,
  fill,
  fit,
  contain,
  bare,
  gallery,
}: PlaceProps) {
  const { show } = useLightbox();
  const match = Boolean(fit || tile === "tall");
  const span = tile ? tileClass[tile] : "";
  const stretch = Boolean(fill || match);

  const zoomable = Boolean(src && !href);

  function openLightbox() {
    if (!src) return;
    if (gallery?.length) {
      const at = gallery.findIndex((item) => item.src === src);
      show(gallery, at >= 0 ? at : 0);
      return;
    }
    show({ src, alt });
  }

  function openStill(event: React.MouseEvent) {
    if (!src || href) return;
    event.preventDefault();
    event.stopPropagation();
    openLightbox();
  }

  const objectClass = fill
    ? "object-cover object-top"
    : contain
      ? "object-contain"
      : "object-cover";

  const frame = (
    <figure
      className={`group relative overflow-hidden ${
        contain ? "bg-background" : "bg-panel"
      } ${
        fill
          ? "place-fill h-full w-full"
          : contain
            ? "min-h-[55svh] w-full md:min-h-[72svh]"
          : match
            ? "h-full min-h-48 w-full aspect-[16/9] md:aspect-auto md:min-h-0"
            : "min-h-48 w-full md:min-h-64"
      } ${zoomable ? "cursor-zoom-in" : href ? "cursor-pointer" : ""} ${className}`}
      style={
        stretch || contain
          ? undefined
          : { aspectRatio: ratio.replace("/", " / ") }
      }
      onClick={zoomable ? openStill : undefined}
      onKeyDown={
        zoomable
          ? (event) => {
              if (!src) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox();
              }
            }
          : undefined
      }
      role={zoomable ? "button" : undefined}
      tabIndex={zoomable ? 0 : undefined}
      aria-label={zoomable ? `View ${alt} full screen` : undefined}
    >
      {src ? (
        <Image
          src={encodeURI(src)}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className={`${objectClass} ${contain ? "" : "transition-transform duration-700 ease-out group-hover:scale-[1.04]"}`}
          priority={fill}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#151515_0%,#0b0b0b_48%,#171717_100%)] transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[repeating-linear-gradient(-18deg,transparent,transparent_11px,rgba(255,255,255,0.03)_11px,rgba(255,255,255,0.03)_12px)]" />
        </>
      )}

      {!bare && !contain ? (
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
      ) : null}

      {!src ? (
        <figcaption className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
          <div className="flex items-start justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-muted">
            <span>{index ?? "Still"}</span>
            <span>{ratio.replace("/", ":")}</span>
          </div>
          <p className="max-w-[36ch] text-[11px] leading-relaxed text-foreground/75 md:text-xs">
            {alt}
          </p>
        </figcaption>
      ) : null}

      {hover ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100"
          />
          <div className="absolute right-3 bottom-3 md:right-6 md:bottom-6">
            <span className="font-display whitespace-pre-line text-base font-semibold tracking-tight text-white uppercase drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] opacity-100 translate-y-0 md:text-2xl lg:text-3xl md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {hover}
            </span>
          </div>
        </>
      ) : null}
    </figure>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`block ${span} ${stretch ? "h-full" : ""}`}
        aria-label={alt}
      >
        {frame}
      </Link>
    );
  }

  return <div className={`${span} ${stretch ? "h-full" : ""}`}>{frame}</div>;
}

export function Collage({
  children,
  className = "gap-2 md:gap-3",
  twoUp = false,
}: {
  children: React.ReactNode;
  className?: string;
  twoUp?: boolean;
}) {
  return (
    <div
      className={`${twoUp ? "grid grid-cols-2 md:grid-cols-12" : "grid grid-cols-1 md:grid-cols-12"} ${className}`}
    >
      {children}
    </div>
  );
}
