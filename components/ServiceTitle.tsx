export function ServiceTitle({ title }: { title: string }) {
  const [lead, rest] = title.split(" / ");
  if (!rest) return <>{title}</>;

  return (
    <>
      {lead}
      <span className="block">/ {rest}</span>
    </>
  );
}
