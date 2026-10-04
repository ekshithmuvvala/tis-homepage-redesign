import ScrollReveal from '../animation/ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    text: 'Explore our school, approach and learning environment.',
  },
  {
    number: '02',
    title: 'Connect',
    text: 'Speak with our admissions team and understand the right pathway.',
  },
  {
    number: '03',
    title: 'Join',
    text: 'Begin your child’s journey with the Tulas International School community.',
  },
];

export default function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="bg-[#f4f5f1] px-6 py-24 text-ink dark:bg-[#101512] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-8 md:p-12 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
                Admissions
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Start your Tulas journey.
              </h2>

              <p className="mt-6 leading-8 text-ink/60 dark:text-white/60">
                Take the first step towards an inspiring school experience.
                Our admissions team is here to guide families through the
                process.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="rounded-3xl bg-[#f4f5f1] p-6 dark:bg-white/[0.05]">
                    <span className="text-sm font-bold text-brand-600">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-ink/60 dark:text-white/60">
                      {step.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-700 dark:bg-white dark:text-ink"
                data-cursor="interactive"
              >
                Enquire about admissions
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}