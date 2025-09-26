import React from 'react';
import "./Project.css"
import { motion } from "framer-motion"
import { projects } from '../../assets/assets';
import { PiGithubLogoLight, PiShare } from 'react-icons/pi';

const Project = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
          projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} className="group border border-gray-400 rounded overflow-hidden backdrop-blur-[2px] hover:backdrop-blur-[4px] rounded-lg transition myanis">
              <div className="w-full relative h-60 bg-white overflow-hidden">
                <img src={project.photo} className='w-full h-full group-hover:scale-110 transition duration-500 object-cover object-top' alt="" />
                <div className="w-full h-full absolute left-0 bottom-0 flex justify-center items-center gap-2 group-hover:bg-black/30 transition duration-500">
                  <button className='flex justify-center items-center gap-1 bg-black rounded cursor-pointer px-4 py-1  opacity-0 group-hover:animate-myaniupto transition duration-500 utpani1'>
                    <PiShare size={18} />
                    <a href={project.link} target='_blank' className=''>Live Demo</a>
                  </button>
                  <button className='flex justify-center items-center gap-1 bg-black rounded cursor-pointer  opacity-0 group-hover:animate-myaniupto transition duration-500 px-4 py-1 utpani2'>
                    <PiGithubLogoLight size={18} />
                    <a href={project.gitlink} target='_blank' className='inline-block'>Source</a>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className='text-lg md:text-xl font-bold text-left'>{project.title}</h3>
                <p className='text-sm truncate'>{project.details}</p>
                <div className="flex flex-wrap gap-2 py-2">
                  {
                    project.language.map((lang, idx) => (
                      <div key={idx} className="text-xs md:text-sm border border-gray-400 rounded-full py-1 px-3">{lang}</div>
                    ))
                  }
                </div>
              </div>
            </motion.div>
          ))
        }

      </div>
    </section>
  );
}

export default Project;


// https://winminthantdev.github.io/dashboard/
// https://winminthantdev.github.io/productdetails/
// https://talkiesocialapp.onrender.com/