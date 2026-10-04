import ScrollReveal from '../animation/ScrollReveal';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 text-ink dark:bg-[#0b0f0d] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
              About Tulas
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Education that builds confident, curious minds.
            </h2>

            <p className="mt-6 text-base leading-8 text-ink/65 dark:text-white/65 md:text-lg">
              Tulas International School creates an environment where students
              are encouraged to explore, question and grow. Our approach brings
              together academic excellence, creativity, character and real-world
              learning.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Curiosity',
              text: 'Students learn to ask better questions and discover new possibilities.',
            },
            {
              number: '02',
              title: 'Confidence',
              text: 'A supportive environment helps learners communicate, collaborate and lead.',
            },
            {
              number: '03',
              title: 'Character',
              text: 'We develop responsible individuals prepared to make a positive difference.',
            },
          ].map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.1}>
              <article className="h-full rounded-3xl border border-ink/10 bg-ink/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="text-sm font-bold text-brand-600">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-ink/60 dark:text-white/60">
                  {item.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}