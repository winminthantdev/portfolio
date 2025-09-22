import React, { useEffect } from "react";

const ParticlesBg = () => {
  useEffect(() => {
    // Load particlesJS if available
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 600 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false }
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: false }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            out_mode: "out",
          }
        }
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "transparent"
      }}
    ></div>
  );
};

export default ParticlesBg;
