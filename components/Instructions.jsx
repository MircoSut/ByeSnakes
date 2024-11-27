"use client";
import { FaCheckCircle } from "react-icons/fa"; // Import a cute checkmark icon

const Instructions = () => {
  const scrollToMain = () => {
    const instructionsSection = document.getElementById("main");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="instructions"
      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-6"
    >
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Download your{" "}
          <span className="text-green-400">following and follower </span>list
        </h2>
      </div>
      <video controls preload="none">
        <source src="/rightone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ol className="flex flex-col items-start list-decimal ml-6 space-y-3 py-6">
        {[
          "Go to your profile",
          "Your activity",
          "Scroll down to dowload your information",
          "Click download or transfer information",
          "Choose your instagram account",
          "Click some of your information",
          "Select only: Followers and Following",
          "Download to device",
          "Choose all time for date",
          "Create files",
          "Wait for the download to be available",
        ].map((instruction, index) => (
          <li
            key={index}
            className="flex items-start text-gray-600 hover:text-gray-800 transition-all text-lg"
          >
            <FaCheckCircle className="text-green-400 mr-2 mt-1" />
            {instruction}
          </li>
        ))}
      </ol>
      <p
        className="flex text-gray-800 underline cursor-pointer justify-center pt-6 hover:text-blue-500"
        onClick={scrollToMain}
      >
        I have downloaded the file!
      </p>
    </div>
  );
};

export default Instructions;
