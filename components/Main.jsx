"use client";
import FAQListItems from "./FAQListItems";
import FollowerAnalysis from "./FollowerAnalysis";

const Main = () => {
  const scrollToInstructions = () => {
    const instructionsSection = document.getElementById("instructions");
    if (instructionsSection) {
      instructionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="main"
      className="max-w-4xl mx-auto flex flex-col items-center justify-center rounded-lg text-black dark:text-white md:mt-12"
    >
      <div className="p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Upload your{" "}
          <span className="text-green-500"> following and follower </span> list
        </h2>
        <p
          className="flex text-gray-800 dark:text-white text-lg underline cursor-pointer justify-center hover:text-blue-500"
          onClick={scrollToInstructions}
        >
          Don&apos;t know how to download the file?
        </p>
      </div>
      <FollowerAnalysis />

      {/* FAQ */}
      <section className="bg-base-200 dark:text-white" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl text-green-500 lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Question
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "What does this app do exactly?",
                answer:
                  "Given a zip file about your followers and following list, this app will only compare the two list and retrieve who is not following you back(Snakes🐍).",
              },
              {
                question: "Why have you made this app?",
                answer:
                  "I was tired of checking manually who was not following me back, and annoied that instagram doesn't help in that. So I built this mini app! 😆",
              },
              {
                question: "Will this app store my data?",
                answer:
                  "No this app will only compare a list from a zip file. In future Im planning to add a login feature that will store your latest list file and then show who recently unfollowed you.",
              },
            ].map((qa) => (
              <FAQListItems key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Main;
