import React from "react";
import { FaCode, FaRegStar } from 'react-icons/fa6';

const About = () => {
  return (
    
    <section className="flex flex-col items-center p-8 md:p-16" style={{color: "var(--color-text-primary)"}}>
      <h2 className="text-4xl text-gray-500 mb-4">About Me</h2>
      <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent  to-white"></div>
          <FaRegStar />
          <div className="h-px w-24 bg-gradient-to-r from-white  to-transparent"></div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-xs uppercase tracking-wider text-primary font-semibold">
            Who am I?
          </p>
          <p className="text-justify">
            Hi, I’m <span className="font-semibold text-primary">Win Min Thant</span> — 
            a <span className="font-medium">Full Stack Developer</span> passionate about 
            building modern, responsive, and user-friendly web applications. I specialize 
            in <span className="font-medium">React.js, PHP (Laravel), and MySQL</span>, 
            with additional skills in Tailwind CSS, Bootstrap, Firebase, and jQuery.
          </p>
          <p className="text-justify">
            I’m currently studying Computer Science at the University of the People, after 
            pausing my studies at Yadanabon University due to the political situation. 
            Alongside development, I’ve gained hands-on experience in mobile phone repair 
            and worked as a computer teaching assistant.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-primary">Technical Skills</h4>

          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">Frontend Development</h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["HTML","CSS","JavaScript","TypeScript","Bootstrap","Tailwind CSS","jQuery","React.js"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">Backend Development</h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["Express","PHP","Laravel","Python"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">Database Management</h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["MongoDB","PostgreSQL","MySQL"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
