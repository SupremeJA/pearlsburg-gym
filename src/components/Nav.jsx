import logo from "../assets/logo.jpg";
import { List, X } from "@phosphor-icons/react";

function Nav() {
  return (
    <header className="flex justify-between items-center text-white w-full bg-black px-20 py-3">
      <div className="w-20">
        <img src={logo} alt="logo" />
      </div>
      <button className="block md:hidden">
        <List
          size={32}
          weight="thin"
          className="hover:scale-110 hover:rotate-3 transition-transform duration-300"
        />
      </button>
      <nav className="hidden md:flex items-center gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <button className="bg-white text-black px-6 py-1 rounded-xl">
          {" "}
          Get in touch
        </button>
      </nav>
    </header>
  );
}

export default Nav;
