import React from 'react';
import { projects } from '../../assets/assets';

const Project = () => {
  return (
    <section className="p-8 md:p-16 bg-[#0f172a] text-[#f8fafc] text-center">
      <h2 className="text-4xl md:text-5xl mb-12 font-bold text-[#cbd5e1]">My Projects</h2>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        {projects.map(project => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row bg-bg-end rounded-xl overflow-hidden
                        shadow-2xl border border-#334155 transform hover:scale-[1.02] transition-transform duration-300
                        ${project.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Project Photo */}
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <img
                src={project.photo}
                alt={project.title}
                className="w-full max-w-md h-auto rounded-lg object-cover border-2 border-[#334155]"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4 text-[#f8fafc]">{project.title}</h3>
              <p className="text-lg leading-relaxed text-[#cbd5e1] mb-6">{project.details}</p>
              <div className="flex justify-between items-center space-x-4 my-2">
                {
                project.language.map((language,idx)=>(
                  <div className='bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 rounded px-4 py-2'>{language}</div>
                ))
              }
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 text-lg bg-[#3b82f6] text-[#f8fafc]
                            rounded-md shadow-lg hover:bg-[#38bdf8] transition-all duration-300
                            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;


// https://winminthantdev.github.io/dashboard/
// https://winminthantdev.github.io/productdetails/
// https://talkiesocialapp.onrender.com/