import React from 'react';
import {photos} from './../../assets/assets'

const About = () => {
  return (
    <section className="flex flex-col items-center p-8 md:p-16 bg-bg-end text-text-primary">
      <h2 className="text-4xl md:text-5xl mb-12 font-bold text-primary-accent">About Me</h2>
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 md:gap-16">
        {/* Left Side: Photo */}
        <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={photos.profile_2}
            alt="Win Min Thant"
            className="w-64 h-64 rounded-full object-cover border-4 border-primary-accent
                       shadow-xl shadow-primary-accent/60"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex-2 text-center md:text-left">
          <p className="text-lg leading-relaxed text-text-secondary mb-6">
            [cite_start]I started my Computer Science studies at Yadanabon University in 2019, but I had to put my education on hold due to the current political situation. [cite: 2]
            [cite_start]Currently, I am continuing my studies in Computer Science at the University of the People. [cite: 3]
            [cite_start]I am also working in mobile phone repair services, specializing in Android software troubleshooting and hardware repairs. [cite: 4]
            [cite_start]Alongside my job, I am actively learning and developing my skills in web development, focusing on full-stack technologies, UI/UX design. [cite: 5]
          </p>
          <button className="px-7 py-3 text-lg bg-secondary-accent text-text-primary
                             rounded-md shadow-lg hover:bg-hover-glow transition-all duration-300
                             transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hover-glow">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;