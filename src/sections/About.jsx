import { ShieldCheck, Lightning, UsersThree } from "@phosphor-icons/react";
import { useGSAP } from "../hooks/useGSAP";

const highlights = [
  {
    icon: UsersThree,
    title: "Community-driven coaching",
    copy: "Every session gets amplified by teammates, coaches, and a culture of accountability.",
  },
  {
    icon: Lightning,
    title: "Momentum-based programming",
    copy: "Strength, conditioning, and recovery cues are choreographed into a seamless rhythm.",
  },
  {
    icon: ShieldCheck,
    title: "Science-backed promise",
    copy: "We measure, adjust, and validate progress so every rep contributes to the bigger goal.",
  },
];

const stats = [
  { label: "Members empowered", value: "1,200+" },
  { label: "Weekly classes", value: "70" },
  { label: "Average PR gain", value: "12.4%" },
];

function About() {
  useGSAP([
    {
      selector: ".about h2",
      from: { opacity: 0, y: 70 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      trigger: ".about",
      start: "top 85%",
    },
    {
      selector: ".about .about-highlight",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.25,
      trigger: ".about",
      start: "top 85%",
    },
    {
      selector: ".about .about-stats div",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.4,
      trigger: ".about",
      start: "top 80%",
    },
  ]);

  return (
    <section
      id="about"
      className="about bg-gradient-to-b from-[#050505] via-[#090909] to-[#120a12] text-white px-6 py-16 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-yellow-400">
            About us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins leading-tight mt-3">
            A performance club built for people who chase momentum,
            intentionality, and grit.
          </h2>
          <p className="text-slate-300 mt-4 text-sm md:text-base max-w-3xl">
            We merge elite coaching, premium equipment, and community energy so
            every visit adds meaning to your grind. Whether you are rebuilding
            strength, sculpting resilience, or pushing for the next milestone,
            our team keeps the path clear and the accountability unwavering.
          </p>

          <div className="mt-8 grid gap-6 about-grid md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="about-highlight flex flex-col items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-yellow-400"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4c0223] via-[#6a0a1b] to-[#8b0722] text-white shadow-lg shadow-[#4c0223]/40">
                    <Icon size={24} weight="bold" />
                  </span>
                  <h3 className="text-lg font-semibold">{highlight.title}</h3>
                  <p className="text-sm text-slate-200">{highlight.copy}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">
            Why your next season matters
          </p>
          <p className="text-slate-200 mt-4 text-sm leading-relaxed">
            We track loads, recovery, tempo, and lifestyle data so every sprint,
            lift, and rest period contributes to a lifestyle of clarity,
            consistency, and resilience.
          </p>
          <div className="mt-6 grid gap-4 about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
