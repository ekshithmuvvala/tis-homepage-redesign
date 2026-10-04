import ScrollReveal from '../animation/ScrollReveal';

const programs = [
  {
    title: 'Early Years',
    description:
      'A playful and nurturing foundation where children develop curiosity, confidence and essential learning habits.',
  },
  {
    title: 'Primary School',
    description:
      'Strong academic foundations combined with creativity, collaboration and experiential learning.',
  },
  {
    title: 'Secondary School',
    description:
      'A future-focused learning experience that prepares students for higher education and life beyond school.',
  },
];

export default function AcademicsSection() {
  return (
    <section
      id="academics"
      className="bg-[#f4f5f1] px-6 py-24 text-ink dark:bg-[#101512] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
                Academics
              </p>

              <h2 className="font-display text-4xl font-bold md:text-5xl">
                Learning designed for the future.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-ink/60 dark:text-white/60">
              Our academic journey combines strong fundamentals with
              opportunities to think creatively, collaborate and solve
              meaningful problems.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 0.12}>
              <article className="group h-full rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-sm font-bold text-brand-600">
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-ink/60 dark:text-white/60">
                  {program.description}
                </p>

                <div className="mt-7 h-px w-full bg-ink/10 dark:bg-white/10" />

                <p className="mt-5 text-sm font-semibold text-brand-600 transition group-hover:translate-x-1">
                  Explore learning →
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}