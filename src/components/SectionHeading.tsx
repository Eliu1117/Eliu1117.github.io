export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-800">
        {index}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
