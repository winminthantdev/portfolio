import React from 'react';
import { projects } from '../../assets/assets';

const Project = () => {
  return (
    <section className=" text-[#f8fafc] text-center pt-8">
     
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

        <div className="border border-gray-400 rounded overflow-hidden backdrop-blur-[2px] hover:backdrop-blur-[4px] rounded-lg cursor-pointer transition">
          <div className="w-full h-60 bg-white">
            <img src={projects[0].photo} className='w-full h-full object-contain' alt="" />
          </div>
          <div className="p-4">
            <h3 className='text-xl font-bold text-left'>Title Here</h3>
            <p className='text-sm truncate'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, hic quasi! Eaque minima adipisci voluptate! Sint nemo sit culpa autem.</p>
            <div className="flex flex-wrap gap-4 py-2">
              <div className="text-sm border border-gray-400 rounded-full py-1 px-3">ReactJs</div>
              <div className="text-sm border border-gray-400 rounded-full py-1 px-3">ReactJs</div>
              <div className="text-sm border border-gray-400 rounded-full py-1 px-3">ReactJs</div>
              <div className="text-sm border border-gray-400 rounded-full py-1 px-3">ReactJs</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;


// https://winminthantdev.github.io/dashboard/
// https://winminthantdev.github.io/productdetails/
// https://talkiesocialapp.onrender.com/