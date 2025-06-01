import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/data/education"; // Adjust the import path as necessary

function Education() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Education
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm bg-white border border-gray-200 shadow-md rounded-2xl p-6 transition-transform hover:shadow-xl hover:scale-105 flex flex-col items-center text-center"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-black mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
