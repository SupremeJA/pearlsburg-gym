import { useGSAP } from "../hooks/useGSAP";

function Hero() {
  useGSAP([
    {
      selector: ".hero h1",
      from: { opacity: 0, y: 60, letterSpacing: "0.5em" },
      to: { opacity: 1, y: 0, letterSpacing: "0.2em" },
      duration: 1.2,
      trigger: ".hero",
      start: "top 90%",
    },
    {
      selector: ".hero .hero-copy",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.3,
      trigger: ".hero",
      start: "top 85%",
    },
    {
      selector: ".hero .hero-actions button",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.6,
      trigger: ".hero",
      start: "top 80%",
    },
  ]);

  return (
    <section className="hero relative min-h-[75vh] bg-gradient-to-br from-black via-[#2c020f] to-[#4c0223] text-white px-6 md:px-20 py-12 flex items-center">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-burgundy blur-3xl" />
        <div className="absolute right-10 bottom-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.5em] text-white">
          Elevate Your Routine
        </div>
        <h1 className="uppercase text-4xl md:text-6xl font-poppins font-bold leading-tight">
          Unleash Your Fierce Focus
        </h1>
        <p className="hero-copy text-slate-200 text-base md:text-lg max-w-3xl">
          Dominate every session with tailored coaching, premium equipment, and
          a community that keeps you accountable. We build strength, resilience,
          and momentum for the long haul.
        </p>
        <div className="hero-actions flex flex-wrap gap-4">
          <button className="rounded-full border border-white/40 bg-burgundy px-8 py-3 text-sm uppercase tracking-[0.4em] transition hover:bg-white hover:text-burgundy">
            Get Started
          </button>
          <button className="rounded-full border border-white/40 px-8 py-3 text-sm uppercase tracking-[0.4em] text-white/80 hover:text-white">
            View Classes
          </button>
        </div>
        <div className="hero-stats grid grid-cols-3 gap-6 text-center text-sm tracking-[0.3em] text-white/70">
          <div>
            <p className="text-3xl font-semibold text-white">15+</p>
            MEMBERSHIPS
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">250</p>
            COACHED ATHLETES
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">6</p>
            CLASS TYPES
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
