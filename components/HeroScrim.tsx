export function HeroScrim() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent md:h-48" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-background via-background/55 to-transparent" />
    </>
  );
}
