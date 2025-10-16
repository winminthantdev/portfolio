import React from "react";

const About = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* About Me */}
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-xs uppercase tracking-wider text-primary font-semibold">
            Who am I?
          </p>
          <p className="text-justify">
            Hi, I’m <span className="font-semibold text-primary">Win Min Thant</span> — 
            a <span className="font-medium">Full Stack Developer</span> passionate about 
            building modern, responsive, and user-friendly web applications. I specialize in 
            <span className="font-medium"> React.js, PHP (Laravel), MySQL</span>, 
            with additional experience in Tailwind CSS, Bootstrap, Firebase, and jQuery.
          </p>
          <p className="text-justify">
            Professionally, I’m currently working as a <span className="font-medium">Junior Software Technician at Win Mobile World</span>, 
            where I specialize in Android software troubleshooting, flashing, and system optimizations. 
            I also have hands-on experience in mobile phone repairs, including screen replacements and battery issues. 
            Previously, I worked as a computer teaching assistant, which strengthened my technical support and communication skills.
          </p>
          <p className="text-justify">
            I studied Computer Science at <span className="font-semibold text-primary">Yadanabon University</span> before pausing my education due to the political situation.
          </p>

        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-primary">Technical Skills</h4>

          {/* Frontend */}
          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">
              Frontend Development
            </h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["HTML","CSS","JavaScript","TypeScript","Bootstrap","Tailwind CSS","jQuery","React.js"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">
              Backend Development
            </h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["PHP","Laravel","Express","Python"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">
              Database Management
            </h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["MySQL","MongoDB","PostgreSQL"].map(skill => (
                <div key={skill} className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-1 transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="backdrop-blur-sm rounded-xl border border-gray-700 px-6 py-4 shadow-md hover:shadow-lg transition">
            <h6 className="text-base font-semibold mb-3 border-b border-primary/40 inline-block">
              Additional Skills
            </h6>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {["Mobile Software Repair","System Optimization","Customer Support","Teaching Assistant"].map(skill => (
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
