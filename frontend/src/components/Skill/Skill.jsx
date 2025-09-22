import React from "react";
import { datas } from "../../assets/assets";


const Skill = () => {

  return (
      <>

        <style>{`
            @keyframes marqueeScroll {
                0% {
                    transform: translateX(0%);
                }
        
                100% {
                    transform: translateX(-50%);
                }
            }
        
            .marquee-track {
                  animation: marqueeScroll 25s linear infinite;
                  animation-direction: alternate;
            }
        
            .marquee-reverse {
                animation-direction: alternate-reverse;
            }
        `}</style>
        
        <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#0f172a] to-transparent"></div>
            <div className="marquee-track flex transform-gpu min-w-[200%] pt-10 pb-5">
              {[...datas.skills, ...datas.skills].map((skill, index) => (
            <img
              key={`forward-${index}`}
              src={skill.icon}
              alt={skill.name}
              className="h-12 w-auto mx-4"
            />
          ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#0f172a] to-transparent"></div>
        </div>
        
        <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#0f172a] to-transparent"></div>
            <div className="marquee-track marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10">
               {[...datas.skills, ...datas.skills].map((skill, index) => (
                  <img
                    key={`reverse-${index}`}
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-auto mx-4"
                  />
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#0f172a] to-transparent"></div>
        </div>
      </>
  );

};

export default Skill;
