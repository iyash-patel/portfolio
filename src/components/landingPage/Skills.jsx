import React from "react";
import { skillsData } from "@/data/skills"; 

function Skills() {
  return (
    <div>
        <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Skills
        </h2>

        {/* Responsive Grid: 2 cols on small screens, up to 5 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200 shadow-md rounded-2xl
                         p-8 flex flex-col items-center justify-center
                         transition-all hover:shadow-xl hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills