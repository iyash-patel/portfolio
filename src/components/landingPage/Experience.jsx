import React from "react";
import { motion } from "framer-motion";
import { Experiences } from "@/data/experience";

function Experience() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Experience
          </h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black" />

            {Experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative mb-16 flex items-center w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white z-10" />

                  {/* Experience card */}
                  <div
                    className={`w-5/12 bg-black text-white rounded-xl shadow-lg p-6 max-w-md
                      ${isLeft ? "ml-6" : "mr-6"}
                      break-words
                      sm:max-w-sm
                      md:max-w-md
                    `}
                    style={{ wordBreak: 'break-word' }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
                        <img
                          src={exp.icon}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold break-words max-w-[calc(100%-64px)]">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 font-semibold mb-1 break-words max-w-[calc(100%-64px)]">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 break-words max-w-[calc(100%-64px)]">
                      {exp.duration}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200 break-words">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;