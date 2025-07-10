import React from "react";
import { datas, photos } from "./../../assets/assets";

const About = () => {
  return (
    <section
      className="flex flex-col items-center p-8 md:p-16"
      style={{
        background: "var(--color-bg-end)",
        color: "var(--color-text-primary)",
      }}
    >
      <h2
        className="text-4xl md:text-5xl mb-12 font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 md:gap-16">
        {/* Left Side: Photo */}
        <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={photos.profile_2}
            alt="Win Min Thant"
            className="w-64 h-64 rounded-full object-cover border-4 shadow-xl shadow-[#3b82f6]/60"
            style={{ borderColor: "var(--color-primary-accent)" }}
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex-2 text-center md:text-left">
          <p
            className="text-lg leading-relaxed  mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {datas.about.description}
          </p>
          <a href={datas.about.resumeLink} download className="inline-block">
            <button
              className="px-7 py-3 text-lg 
                       rounded-md shadow-lg hover:bg-hover-glow transition-all duration-300
                       transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hover-glow"
              style={{
                background: "var(--color-primary-accent)",
                color: "var(--color-text-primary)",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
