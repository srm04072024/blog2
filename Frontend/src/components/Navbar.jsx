import { useState } from "react";
import Image from "./Image";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" w={40} h={40} alt="Logo" />
        <span>Your's Blog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          {open ? "X" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a to="/" onClick={() => setOpen(false)}>
            Home
          </a>
          <a to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </a>
          <a to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </a>
          <a to="/" onClick={() => setOpen(false)}>
            About
          </a>
          <a to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a to="/">Home</a>
        <a to="/posts?sort=trending">Trending</a>
        <a to="/posts?sort=popular">Most Popular</a>
        <a to="/">About</a>
        <a to="/login" onClick={() => setOpen(false)}>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
