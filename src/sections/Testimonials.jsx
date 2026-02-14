import { useGSAP } from "../hooks/useGSAP";
import data from "../data/data.json";

function Testimonials() {
  useGSAP([
    {
      selector: ".testimonials h2",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      trigger: ".testimonials",
      start: "top 80%",
    },
    {
      selector: ".testimonials .testimonial-card",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.2,
      trigger: ".testimonials",
      start: "top 80%",
    },
  ]);

  return (
    <section className="testimonials bg-gradient-to-b from-[#050505] via-[#0c0b0b] to-[#1f1f1f] text-white px-6 py-16 md:px-16">
      <div className="max-w-6xl mx-auto ">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-yellow-400">
            Athlete stories
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins">
            Real progress, real momentum
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            The numbers matter, but the transformations last longer when you’re
            surrounded by a community that keeps you accountable.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {data.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="testimonial-card bg-white/5 border border-white/5 rounded-3xl p-7 flex flex-col gap-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-white"
            >
              <p className="italic text-slate-100 text-sm leading-relaxed">
                “{testimonial.message}”
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    {testimonial.role ?? "Member"}
                  </p>
                </div>
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
