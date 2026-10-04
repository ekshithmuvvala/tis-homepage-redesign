import ScrollReveal from '../animation/ScrollReveal';

export default function CampusSection() {
  return (
    <section
      id="campus"
      className="bg-white px-6 py-24 text-ink dark:bg-[#0b0f0d] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
              Campus Life
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              A place where learning comes alive.
            </h2>

            <p className="mt-6 leading-8 text-ink/60 dark:text-white/60 md:text-lg">
              From classrooms and activity spaces to sports and collaborative
              environments, every part of campus is designed to encourage
              exploration and connection.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-ink">
              <img
                src="/images/hero-campus.jpg"
                alt="Students learning together on the Tulas International School campus"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  Campus
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Learn. Explore. Belong.
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {[
              {
                title: 'Collaborative Spaces',
                text: 'Spaces that encourage teamwork, discussion and creative thinking.',
              },
              {
                title: 'Active Learning',
                text: 'Learning experiences that extend beyond traditional classrooms.',
              },
              {
                title: 'Student Community',
                text: 'A welcoming community where every student has space to grow.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="rounded-3xl border border-ink/10 p-7 dark:border-white/10">
                  <span className="text-sm font-bold text-brand-600">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                  <p className="mt-2 leading-7 text-ink/60 dark:text-white/60">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}