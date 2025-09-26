import React from "react";
import { motion } from "framer-motion";
import { datas, photos } from "./../../assets/assets";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-10 gap-8">
      {/* Text Section */}
      <motion.div
        className="space-y-4 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Hello, I'm</p>
        <h1 className="text-4xl md:text-8xl font-bold text-white">
          {datas.home.greeting || "Win Min Thant"}
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          {datas.home.tagline || "Full Stack Developer"}
        </p>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {datas.home.intro ||
            "I build clean, modern, and responsive web applications using React, Tailwind CSS, and Laravel."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <a href="https://t.me/winminthant" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-semibold text-white border rounded-lg hover:bg-opacity-100 transition duration-300"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
