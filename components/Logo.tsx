"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  onClick?: () => void;
  priority?: boolean;
};

function logoSrc() {
  const version = site.logo.version;
  return version ? `${site.logo.src}?v=${version}` : site.logo.src;
}

function logoFilename() {
  const base = site.logo.src.split("/").pop() ?? "logo.webp";
  return base.split("?")[0];
}

export function Logo({ className = "", onClick, priority = false }: LogoProps) {
  const router = useRouter();
  const dragged = useRef(false);
  const fileRef = useRef<File | null>(null);
  const src = logoSrc();

  useEffect(() => {
    let active = true;

    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        if (!active) return;
        fileRef.current = new File([blob], logoFilename(), { type: blob.type });
      })
      .catch(() => {
        fileRef.current = null;
      });

    return () => {
      active = false;
    };
  }, [src]);

  function handleDragStart(event: React.DragEvent<HTMLImageElement>) {
    event.stopPropagation();
    dragged.current = true;

    const url = new URL(src, window.location.origin).href;
    event.dataTransfer.clearData();
    event.dataTransfer.effectAllowed = "copy";

    if (fileRef.current && event.dataTransfer.items?.length !== undefined) {
      event.dataTransfer.items.add(fileRef.current);
    } else {
      event.dataTransfer.setData("text/uri-list", url);
      event.dataTransfer.setData("text/plain", url);
    }

    event.dataTransfer.setDragImage(
      event.currentTarget,
      event.currentTarget.clientWidth / 2,
      event.currentTarget.clientHeight / 2,
    );
  }

  function handleDragEnd() {
    window.setTimeout(() => {
      dragged.current = false;
    }, 150);
  }

  function goHome() {
    if (dragged.current) return;
    onClick?.();
    router.push("/");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLImageElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goHome();
    }
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={goHome}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`${site.name} home — drag logo to save`}
      fetchPriority={priority ? "high" : undefined}
      className={`logo-image inline-block h-8 w-auto max-h-8 max-w-[3.75rem] shrink-0 object-contain object-left cursor-grab transition-opacity hover:opacity-80 active:cursor-grabbing md:h-12 md:max-h-12 md:max-w-[5.75rem] lg:h-14 lg:max-h-14 lg:max-w-[6.75rem] ${className}`}
      style={{ aspectRatio: `${site.logo.width} / ${site.logo.height}` }}
    />
  );
}
