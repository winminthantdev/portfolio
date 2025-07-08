import React from 'react';

// Dummy project data for demonstration
const projects = [
  {
    id: 1,
    title: 'E-commerce Website Redesign',
    details: 'Led the redesign of a responsive e-commerce platform, improving user experience and conversion rates by 15%. Utilized ReactJS for frontend and Node.js for backend.',
    photo: 'https://via.placeholder.com/400x250/3b82f6/FFFFFF?text=Project+1', // Placeholder image
    link: '#'
  },
  {
    id: 2,
    title: 'Mobile App for Task Management',
    details: 'Developed a cross-platform mobile application using React Native to help users manage daily tasks. Features include task categorization, reminders, and progress tracking.',
    photo: 'https://via.placeholder.com/400x250/a855f7/FFFFFF?text=Project+2', // Placeholder image
    link: '#'
  },
  {
    id: 3,
    title: 'Personal Portfolio Site',
    details: 'Designed and developed a personal portfolio website showcasing various projects and skills. Focused on clean UI/UX and responsive design principles.',
    photo: 'https://via.placeholder.com/400x250/38bdf8/FFFFFF?text=Project+3', // Placeholder image
    link: '#'
  }
];

const Project = () => {
  return (
    <section className="p-8 md:p-16 bg-bg-start text-text-primary text-center">
      <h2 className="text-4xl md:text-5xl mb-12 font-bold text-primary-accent">My Projects</h2>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        {projects.map(project => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row bg-bg-end rounded-xl overflow-hidden
                        shadow-2xl border border-border-color transform hover:scale-[1.02] transition-transform duration-300
                        ${project.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Project Photo */}
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <img
                src={project.photo}
                alt={project.title}
                className="w-full max-w-md h-auto rounded-lg object-cover border-2 border-border-color"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4 text-text-primary">{project.title}</h3>
              <p className="text-lg leading-relaxed text-text-secondary mb-6">{project.details}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 text-lg bg-primary-accent text-text-primary
                            rounded-md shadow-lg hover:bg-hover-glow transition-all duration-300
                            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hover-glow">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;