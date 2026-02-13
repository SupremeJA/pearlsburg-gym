import logo from "../assets/logo.jpg";
import { List, X } from "@phosphor-icons/react";

function Nav() {
  return (
    <header className="flex justify-between items-center text-white w-full bg-black-500 px-10 py-3">
      <div className="w-20">
        <img src={logo} alt="logo" />
      </div>
      <button className="block md:hidden">
        <List size={32} weight="thin" />
      </button>
      <nav className="hidden md:flex items-center gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <button className="bg-white text-black-500 px-6 py-1 rounded-xl">
          {" "}
          Get in touch
        </button>
      </nav>
    </header>
  );
}

export default Nav;
