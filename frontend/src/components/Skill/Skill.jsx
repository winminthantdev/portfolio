import React from "react";
import {datas} from "../../assets/assets";

const Skill = () => {
  return (
    <section className="p-8 md:p-16 bg-bg-end text-text-primary text-center">
      <h2 className="text-4xl md:text-5xl mb-12 font-bold text-primary-accent">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
                      gap-6 md:gap-8 max-w-7xl mx-auto">
        {datas.skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 md:p-6
                       bg-bg-start rounded-xl shadow-lg border border-border-color
                       hover:scale-105 hover:border-primary-accent transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl md:text-6xl font-semibold mb-2 text-primary-accent
                            flex items-center justify-center w-20 h-20 md:w-24 md:h-24
                            bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 rounded-xl">
              {skill.icon} 
            </div>
            {/* If using images, it would look like this:
            <img src={`/path/to/icons/${skill.name.toLowerCase()}.svg`} alt={skill.name} className="w-20 h-20 md:w-24 md:h-24 mb-2" />
            */}

            <p className="text-lg md:text-xl font-medium text-text-primary mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
