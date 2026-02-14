import { useGSAP } from "../hooks/useGSAP";
import data from "../data/data.json";

function Pricing() {
  useGSAP([
    {
      selector: ".pricing h2",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      trigger: ".pricing",
      start: "top 80%",
    },
    {
      selector: ".pricing-card",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.2,
      trigger: ".pricing",
      start: "top 80%",
    },
  ]);

  return (
    <section
      id="pricing"
      className="pricing bg-[#090909] text-white px-6 py-16 md:px-16"
    >
      <div className="max-w-6xl mx-auto ">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-yellow-400">
            Membership Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins">
            Progress feels better when it’s planned
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Our memberships layer coaching, support, and proven systems so you
            can stay accountable without guessing what to do next.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {data.pricing.map((plan) => (
            <article
              key={plan.plan}
              className="pricing-card bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 backdrop-blur shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-white"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-slate-300">
                {plan.plan}
              </span>
              <div className="text-4xl font-bold text-white">{plan.price}</div>
              <ul className="flex-1 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 before:content-['•'] before:text-yellow-400"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 px-6 py-3 w-full rounded-full bg-burgundy text-white font-semibold tracking-wide shadow-lg shadow-burgundy/50 hover:bg-white hover:text-burgundy transition">
                Join Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
