import { BarbellIcon, UsersIcon, WrenchIcon } from "@phosphor-icons/react";
import { useGSAP } from "../hooks/useGSAP";
import data from "../data/data.json";

const iconMap = {
  dumbbell: BarbellIcon,
  users: UsersIcon,
  wrench: WrenchIcon,
};

function Services() {
  useGSAP([
    {
      selector: ".services h2",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      trigger: ".services",
      start: "top 85%",
    },
    {
      selector: ".services .service-card",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.2,
      trigger: ".services",
      start: "top 85%",
    },
  ]);

  return (
    <section
      id="services"
      className="services bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] text-white px-6 py-14 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.6em] text-yellow-400">
          What we offer
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins">
          Thoughtfully designed programs for every athlete
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
          Each service is backed by experienced coaches and high-energy spaces
          to help you stay accountable while enjoying the grind.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {data.services.map((service) => {
          const IconComponent = iconMap[service.icon];

          if (!IconComponent) return null;

          return (
            <article
              key={service.title}
              className="service-card bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 items-center text-center transition hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#4c0223] via-[#6a0a1b] to-[#8b0722] text-white shadow-lg shadow-[#4c0223]/40">
                <IconComponent size={32} weight="bold" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
              <span className="self-stretch border-t border-white/20 pt-4 text-xs uppercase tracking-[0.4em] text-white/70">
                Learn more
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
