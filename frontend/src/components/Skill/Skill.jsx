import React, { useState, useEffect } from "react";
import { datas } from "../../assets/assets";

const Skill = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSkills = isSmallScreen && !showAll
    ? datas.skills.slice(0, 6)
    : datas.skills;

  return (
    <section
      className="p-8 md:p-16 text-center"
      style={{
        color: "var(--color-text-primary)",
      }}
    >
      <h2
        className="text-4xl md:text-5xl mb-12 font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        My Skills
      </h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 
                gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4"
      >
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full aspect-square
                 p-4 rounded-xl shadow-lg border border-border-color
                 hover:scale-105 hover:border-[#3b82f6] transition-all duration-300 cursor-pointer"
            style={{ background: "var(--color-bg-start)" }}
          >
            <div
              className="text-3xl md:text-4xl flex items-center justify-center 
                   w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br 
                   from-[#3b82f6]/20 to-[#a855f7]/20  rounded-xl mb-2"
              style={{ color: "var(--color-primary-accent)" }}
            >
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p
              className="text-sm md:text-base font-medium text-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {isSmallScreen && datas.skills.length > 6 && (
        <div className="mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm font-medium bg-[#3b82f6] text-white rounded-md shadow hover:bg-blue-600 transition-all"
          >
            {showAll ? "See Less" : "See All Skills"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Skill;
