"use client";

import Link from "next/link";

const Navbar = () => {
  const scrollToAbout = () => {
    const instructionsSection = document.getElementById("about");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="flex flex-row justify-center items-center py-2 px-4 max-w-[1440px]">
      <div className="flex w-1/3 justify-center">
        {/* logo */}
        <h2 className="font-semibold text-2xl">
          Bye<span className="text-green-500">Snakes</span>
        </h2>
      </div>
      <div className="flex w-1/3 justify-center">
        <ul>
          <li
            className="text-lg hover:font-bold cursor-pointer"
            onClick={scrollToAbout}
          >
            About
          </li>
        </ul>
      </div>
      <div className="flex w-1/3 justify-center">
        <button className="bg-green-500 text-lg text-white hover:font-bold p-2 rounded-3xl hover:shadow-md hover:shadow-gray-300 px-4">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;