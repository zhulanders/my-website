import React from 'react';

import { myProjects } from '../constants/index.js'; 

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-10 py-10">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {myProjects.map(({ title, desc, subdesc, href, tags }, index) => (
          <a
            key={index}
            href={href || '#'}
            target={href ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group bg-black-200 rounded-lg p-6 hover:bg-black-300 transition-colors cursor-pointer shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400">{title}</h3>
            <p className="text-gray-300 mb-2 text-sm">{desc}</p>
            <p className="text-gray-400 mb-4 text-xs italic">{subdesc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ id, name }) => (
                <span
                  key={id}
                  className="bg-indigo-600 text-white text-xs rounded-full px-3 py-1 select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
