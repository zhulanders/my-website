import React from 'react';
import { myProjects } from '../constants';

const Projects = () => {
  return (
    <section className="c-space my-20 flex flex-col items-center" id="projects">
      <h2 className="head-text mb-10 text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 [grid-auto-rows:minmax(0,_auto)]">

        {myProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-black-200 border border-black-300 rounded-xl p-6 flex flex-col justify-between transition duration-300 hover:shadow-xl hover:scale-[1.02] transform min-h-[500px]"
          >
            <div>
              {/* Optional Image First */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 rounded-md mb-3 object-cover border border-black-300"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-white-600 mb-2">{project.desc}</p>
              <p className="text-white-600 text-sm">{project.subdesc}</p>
            </div>

            {/* Footer: Tags and GitHub icon */}
            <div className="mt-6 flex justify-between items-end">
              {/* Tech Icons */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="w-8 h-8 object-contain bg-white bg-opacity-5 p-1 rounded"
                  />
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  <img
                    src="/assets/github.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
