type HeroScrimProps = {
  /** Dark fade behind bottom title text. Default true. */
  bottom?: boolean;
  /** Dark fade under the header. Default true. */
  top?: boolean;
};

export function HeroScrim({ bottom = true, top = true }: HeroScrimProps) {
  return (
    <>
      {top ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent md:h-48" />
      ) : null}
      {bottom ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-background via-background/55 to-transparent" />
      ) : null}
    </>
  );
}
