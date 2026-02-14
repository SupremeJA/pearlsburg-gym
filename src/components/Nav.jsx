import { useState } from "react";
import logo from "../assets/logo.jpg";
import { List, X } from "@phosphor-icons/react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    // { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ];
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-1000 flex justify-between items-center text-white w-full bg-black px-10 md:px-20 py-3 relative">
      <div className="w-20">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="block md:hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform duration-300"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <X
            size={32}
            weight="thin"
            className="hover:scale-110 hover:-rotate-3 transition-transform duration-300"
          />
        ) : (
          <List
            size={32}
            weight="thin"
            className="hover:scale-110 hover:rotate-3 transition-transform duration-300"
          />
        )}
      </button>
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="group relative uppercase tracking-[0.3em] text-xs font-semibold transition-colors duration-300"
          >
            <span className="transition-colors duration-300 ">{label}</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-burgundy transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}

        <a
          href="#contact"
          className="group relative overflow-hidden rounded-xl bg-white px-6 py-1.5 text-black font-semibold uppercase tracking-wide transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Get in touch
          </span>
          <span className="absolute inset-0 bg-burgundy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </nav>
      <div
        className={`absolute md:hidden top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.45)] origin-top transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col px-10 py-6 gap-5 text-lg">
          {navItems.map(({ label, href }, index) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`group flex items-center justify-between text-base font-semibold uppercase tracking-[0.35em] transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <span>{label}</span>
              <span className="h-2 w-2 rounded-full bg-burgundy transition-transform duration-300 group-hover:scale-125" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{ transitionDelay: `${navItems.length * 60}ms` }}
            className={`group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-center text-black font-semibold uppercase tracking-wide transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Get in touch
            </span>
            <span className="absolute inset-0 bg-burgundy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
