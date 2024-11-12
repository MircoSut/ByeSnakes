"use client";

import Image from "next/image";

const Hero = () => {
  const scrollToMain = () => {
    const instructionsSection = document.getElementById("main");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-12 text-black">
      <div className="flex flex-row justify-center md:gap-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl p-2 md:text-6xl">
            Simplify <span className="text-green-500">Instagram</span>
          </h1>
          <p className="pt-2 pb-6 text-lg md:text-2xl">
            🐍Easily catch <span className="text-green-400">snakes</span> that
            don't follow you back🐍
          </p>
          <button
            onClick={scrollToMain}
            className="bg-green-500 text-xl text-white hover:font-bold p-2 rounded-3xl hover:shadow-md hover:shadow-gray-300 px-4"
          >
            Catch!
          </button>
        </div>
        <div>
          <Image src={"/logo_2.png"} width={350} height={350} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
