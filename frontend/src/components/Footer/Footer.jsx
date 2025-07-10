import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-xs md:text-md bg-bg-end p-8 text-center text-text-secondary border-t border-border-color mt-auto">
      <div className="mb-4">
        <a
          href="#"
          className="text-sm md:text-lg text-text-secondary me-2 md:mx-4 hover:text-primary-accent transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="text-sm md:text-lg text-text-secondary mx-2 md:mx-4 hover:text-primary-accent transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#"
          className="text-sm md:text-lg text-text-secondary mx-2 md:mx-4 hover:text-primary-accent transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-sm md:text-lg text-text-secondary mx-2 md:mx-4 hover:text-primary-accent transition-colors duration-200"
        >
          Skills
        </a>
        <a
          href="#"
          className="text-sm md:text-lg text-text-secondary mx-2 md:mx-4 hover:text-primary-accent transition-colors duration-200"
        >
          Contact
        </a>
      </div>
      <div className="mb-4">
        {/* Placeholder Social Media Icons - you'd integrate Font Awesome or similar */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary mx-3 text-2xl hover:text-hover-glow transition-colors duration-200"
        >
          {/* Example: <i class="fab fa-linkedin"></i> */}
          LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary mx-3 text-2xl hover:text-hover-glow transition-colors duration-200"
        >
          {/* Example: <i class="fab fa-github"></i> */}
          GitHub
        </a>
      </div>
      <p>&copy; {currentYear} Win Min Thant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
