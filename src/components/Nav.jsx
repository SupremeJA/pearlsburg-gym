import { useState } from "react";
import logo from "../assets/logo.jpg";
import { List, X } from "@phosphor-icons/react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-1000 flex justify-between items-center text-white w-full bg-black px-10 md:px-20 py-3 relative">
      <div className="w-20">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="block md:hidden"
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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>

        <button className="bg-white text-black px-6 py-1 rounded-xl">
          <a href="#contact"> Get in touch</a>
        </button>
      </nav>
      <div
        className={`absolute md:hidden top-full left-0 w-full bg-black/95 border-t border-white/10 origin-top transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col px-10 py-6 gap-4 text-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-black px-6 py-2 rounded-xl text-center mt-2"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
