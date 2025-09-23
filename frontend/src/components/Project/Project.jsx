import React from 'react';
import { projects } from '../../assets/assets';

const Project = () => {
  return (
    <section className="p-8 md:p-16 text-[#f8fafc] text-center">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        {/* {projects.map(project => (
          <a 
            href={project.link}
            key={project.id}
            className={`flex flex-col md:flex-row bg-bg-end rounded-xl overflow-hidden
                        shadow-2xl border border-#334155 transform cursor-pointer hover:scale-[1.02] hover:bg-wite/5 transition-transform duration-300
                        ${project.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            target='_blank'
          >
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <img
                src={project.photo}
                alt={project.title}
                className="w-full max-w-md h-auto rounded-lg object-cover border-2 border-[#334155]"
              />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4 text-[#f8fafc]">{project.title}</h3>
              <p className="text-lg leading-relaxed text-[#cbd5e1] mb-6">{project.details}</p>
              <div className="flex flex-wrap gap-4 items-center my-2">
                {
                project.language.map((language,idx)=>(
                  <div key={idx} className='bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 rounded px-4 py-2'>{language}</div>
                ))
              }
              </div>
            </div>
          </a>
        ))} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded overflow-hidden group backdrop-blur-[2px]">
          <div className="w-full h-60 bg-white">
            <img src={projects[0].photo} className='w-full h-full object-contain group-hover:scale-101 transition-all' alt="" />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, hic quasi! Eaque minima adipisci voluptate! Sint nemo sit culpa autem.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;


// https://winminthantdev.github.io/dashboard/
// https://winminthantdev.github.io/productdetails/
// https://talkiesocialapp.onrender.com/