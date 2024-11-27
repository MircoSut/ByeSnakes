"use client";
const About = () => {
  const scrollToMain = () => {
    const instructionsSection = document.getElementById("main");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-6 text-black"
    >
      <h2 className="text-2xl font-bold text-green-500">About</h2>
      <p className="p-4 text-lg">
        I was tired of checking manually who was not following me back, and
        annoied that instagram doesn't help in that. So I built this mini app!
        xD
      </p>
      <button
        onClick={scrollToMain}
        className="bg-green-500 text-lg text-white hover:font-bold p-2 rounded-3xl hover:shadow-md hover:shadow-gray-300 px-4"
      >
        Good Job!
      </button>
    </div>
  );
};

export default About;
