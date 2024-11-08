const Hero = () => {
  return (
    <header className="rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-12 text-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl p-2">
          Simplify <span className="text-green-500">Instagram</span>
        </h1>
        <p className="pb-2">
          🐍Easily catch <span className="text-green-400">snakes</span> that
          don't follow you back🐍
        </p>
        <button className="text-white text-lg bg-green-500 rounded-full hover:font-bold cursor-pointer px-4">
          Go
        </button>
      </div>
    </header>
  );
};

export default Hero;
