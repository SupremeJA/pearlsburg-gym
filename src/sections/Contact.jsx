import { EnvelopeSimple, PhoneCall, MapPin } from "@phosphor-icons/react";
import { useGSAP } from "../hooks/useGSAP";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit us",
    description: "418 Momentum Dr, Suite 200, Lagos",
    meta: "Open daily · 5AM – 11PM",
  },
  {
    icon: PhoneCall,
    title: "Call or text",
    description: "+234 700 555 1122",
    meta: "Response in under 1 hour",
  },
  {
    icon: EnvelopeSimple,
    title: "Email",
    description: "coach@fiercefocus.fit",
    meta: "We reply within a business day",
  },
];

function Contact() {
  useGSAP([
    {
      selector: ".contact h2",
      from: { opacity: 0, y: 70 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      trigger: ".contact",
      start: "top 85%",
    },
    {
      selector: ".contact .contact-card",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.25,
      trigger: ".contact",
      start: "top 85%",
    },
    {
      selector: ".contact form",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      delay: 0.35,
      trigger: ".contact",
      start: "top 80%",
    },
  ]);

  return (
    <section
      id="contact"
      className="contact bg-burgundy text-white px-6 py-16 md:px-16"
    >
      <div className="max-w-6xl mx-auto ">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-white">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins">
            Let’s design your next season of progress
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Whether you’re ready to train, collaborate, or just need answers
            about programming, drop a line. Our coaches respond fast because
            momentum is built in the follow-through.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <article
                  key={detail.title}
                  className="contact-card flex items-start gap-4 rounded-3xl border border-white/10 bg-black p-6 shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4c0223] via-[#6a0a1b] to-[#8b0722] text-white shadow-lg shadow-[#4c0223]/40">
                    <Icon size={24} weight="bold" />
                  </span>
                  <div className="text-left space-y-1">
                    <p className="text-sm uppercase tracking-[0.4em] text-white">
                      {detail.title}
                    </p>
                    <p className="text-lg font-semibold">
                      {detail.description}
                    </p>
                    <p className="text-sm text-white/70">{detail.meta}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <form className="rounded-3xl border border-white/10 bg-black/30 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.55)] space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-left text-sm uppercase tracking-[0.3em] text-white/60">
                Name
                <input
                  type="text"
                  placeholder="Ray K."
                  className="mt-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                />
              </label>
              <label className="flex flex-col text-left text-sm uppercase tracking-[0.3em] text-white/60">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col text-left text-sm uppercase tracking-[0.3em] text-white/60">
              Phone
              <input
                type="tel"
                placeholder="+234 700 555 1122"
                className="mt-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </label>

            <label className="flex flex-col text-left text-sm uppercase tracking-[0.3em] text-white/60">
              Message
              <textarea
                rows="5"
                placeholder="Tell us about your goals, schedule, or the accountability you need."
                className="mt-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-white px-8 py-3 text-sm uppercase tracking-[0.4em] text-black font-semibold shadow-lg shadow-white/50 transition hover:bg-white"
            >
              Send message
            </button>

            <p className="text-center text-xs uppercase tracking-[0.4em] text-white/50">
              Response time · under 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
