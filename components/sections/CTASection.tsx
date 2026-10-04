import ScrollReveal from '../animation/ScrollReveal';

export default function CTASection() {
  return (
    <section className="px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-white md:px-14 md:py-16 dark:bg-white">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-400 dark:text-brand-700">
                Begin the journey
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl dark:text-ink">
                Give your child a place to learn, grow and lead.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/65 dark:text-ink/60">
                Connect with Tulas International School and discover an
                environment built around meaningful learning and personal
                growth.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center rounded-full bg-white px-7 py-4 text-sm font-bold text-ink transition duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:text-white dark:bg-ink dark:text-white"
              data-cursor="interactive"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}