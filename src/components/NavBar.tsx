"use client"
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";


const NavBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-black">
      {/* Logo */}
      <h2 className="text-white text-3xl font-bold leading-snug">
        Food<span className="text-orange-500 ">tuck</span>
      </h2>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-white text-md">
        {[
          { name: "Home", link: "/" },
          { name: "Menu", link: "/menu" },
          { name: "Blog", link: "/blog" },
          { name: "Pages", link: "/pages" },
          { name: "About", link: "/aboutUs" },
          { name: "Shop", link: "/shop" },
          { name: "Contact", link: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="text-sm font-medium hover:text-orange-400"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Icons: Search, Bag, Person */}
      <div className="flex gap-6 items-center">
        <button className="text-white text-lg flex items-center">
          <IoSearchOutline className="text-xl" />
        </button>
        <button className="text-white text-lg flex items-center">
          <LuUserRound  className="text-xl" />
        </button>
        <button className="text-white text-lg flex items-center">
          <PiHandbag className="text-xl" />
        </button>
       
      </div>
    </header>
  );
};

export default NavBar;
