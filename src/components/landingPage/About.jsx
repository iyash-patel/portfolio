import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

function About() {
  const [isColor, setIsColor] = useState(false);

  const handleImageClick = () => {
    // Toggle grayscale on click (useful for mobile)
    setIsColor((prev) => !prev);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Reverse order on mobile, normal order on desktop */}
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

          {/* Image Section - Always on the left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 transform hover:scale-105 group max-w-xs sm:max-w-sm md:max-w-md"
              onClick={handleImageClick}
            >
              <img
                src="/Yash2.jpeg"
                alt="Yash Patel"
                className={`object-cover w-full h-[400px] transition-all duration-500 ease-in-out rounded-3xl
                  ${isColor ? "grayscale-0" : "grayscale"} 
                  group-hover:grayscale-0 cursor-pointer`}
              />
            </div>
          </div>

          {/* Text Section - Always on the right */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 text-center md:text-left">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left">
              Hello! 👋 I'm{" "}
              <span className="font-semibold text-black">Yash Patel</span>, a
              passionate MERN stack developer dedicated to crafting modern,
              responsive, and performance-optimized web applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-left">
              My core strengths lie in JavaScript, React, Node.js, MongoDB, and
              creating beautiful frontend experiences. I love building projects
              that solve real-world problems with clean, maintainable code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
              I’m always curious about new technologies and strive to stay
              current in a fast-evolving ecosystem.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="/Documents/yash_patel_resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaDownload />
                <span className="font-semibold">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
