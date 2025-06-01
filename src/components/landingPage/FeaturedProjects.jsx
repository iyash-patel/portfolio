import { useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Project } from "@/data/projects";

function FeaturedProjects() {
  // Track which project descriptions are expanded
  const [expanded, setExpanded] = useState({});

  // Toggle the expanded state for a given project
  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black sm:text-4xl lg:text-5xl mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
      {Project.map((project) => {
        const isExpanded = expanded[project.id];
        const shortDesc = project.description.slice(0, 100); // First 100 characters

              return (
                <div
                  key={project.id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-md mb-4"
                  />

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                  <p className="text-gray-700 mb-2">
                    {isExpanded ? project.description : `${shortDesc}...`}
                  </p>

                  {project.description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(project.id)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}

                  <div className="flex flex-wrap gap-5 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black hover:underline"
                      >
                       <IoLogoGithub className="h-7 w-7 transition-transform duration-700 hover:rotate-[360deg] cursor-pointer" />
                      View on GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProjects;
