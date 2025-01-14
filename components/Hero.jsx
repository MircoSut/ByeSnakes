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
    <header className="max-w-[1440px] mx-auto rounded-lg py-32 px-12 text-black dark:text-white">
      <section className="flex flex-col md:flex-row text-center max-w-4xl mx-auto">
        <div className="text-balance tracking-tight">
          <h1 className="font-bold text-4xl p-2 md:text-6xl block">
            Catch <span className="text-green-400">snakes</span>🐍 that don't
            follow you back
          </h1>
          <p className="pt-2 pb-6 text-lg md:text-2xl opacity-90 dark:text-white">
            Simplify <span className="text-green-500">Instagram</span> by easily
            uploading follower and following list
          </p>
          <button
            onClick={scrollToMain}
            className="bg-green-500 text-xl md:text-2xl text-white hover:font-bold p-2 rounded-3xl hover:shadow-md hover:shadow-gray-300 px-4"
          >
            Catch!
          </button>
        </div>
      </section>
    </header>
  );
};

export default Hero;
