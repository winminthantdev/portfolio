import React from "react";
import { motion } from "framer-motion";
import { datas, photos } from "./../../assets/assets";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 gap-8">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {datas.home.greeting || "Hi, I'm Win Min Thant"}
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          {datas.home.tagline || "Full Stack Developer"}
        </p>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {datas.home.intro ||
            "I build clean, modern, and responsive web applications using React, Tailwind CSS, and Laravel."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a href="https://t.me/winminthant" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-semibold text-white bg-blue-600 bg-opacity-80 rounded-lg hover:bg-opacity-100 transition duration-300"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={photos.profile_1}
          alt="Profile"
          className="w-[60%] md:w-[70%] lg:w-[60%] object-contain rounded-full hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
