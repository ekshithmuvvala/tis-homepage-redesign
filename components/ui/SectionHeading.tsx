type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center'
      : '';

  return (
    <div
      className={`max-w-3xl ${alignment}`}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-400">
        {eyebrow}
      </p>

      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-ink/60 dark:text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}