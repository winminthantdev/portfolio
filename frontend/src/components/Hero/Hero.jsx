import React from "react";
import { datas, photos } from "./../../assets/assets";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-10">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          {datas.home.greeting || "Hi, I'm Win Min Thant"}
        </h2>

        <p
          className="text-lg md:text-xl font-semibold"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {datas.home.tagline || "Creative Full Stack Developer"}
        </p>

        <p
          className="text-xs md:text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {datas.home.intro ||
            "I build modern, responsive, and accessible websites & apps using React, Tailwind CSS, and Laravel."}
        </p>

        <button
          type="button"
          className="rounded-full font-bold hover:scale-105 transition-all duration-200 px-6 py-3 text-white"
          style={{ background: "var(--color-primary-accent)" }}
        >
          Contact Me
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={photos.profile_1}
          alt="Profile"
          className="w-[90%] md:w-[60%] max-w-xs md:max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
