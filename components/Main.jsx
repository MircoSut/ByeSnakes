"use client";
import FollowerAnalysis from "./FollowerAnalysis";

const Main = () => {
  const scrollToInstructions = () => {
    const instructionsSection = document.getElementById("instructions");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="main"
      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-6 text-black"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold">
          Upload your{" "}
          <span className="text-green-500"> following and follower </span> list
        </h2>
        <p
          className="flex text-gray-800 text-lg underline cursor-pointer justify-center hover:text-blue-500"
          onClick={scrollToInstructions}
        >
          Don&apos;t know how to download the file?
        </p>
      </div>
      <FollowerAnalysis />
    </div>
  );
};

export default Main;
