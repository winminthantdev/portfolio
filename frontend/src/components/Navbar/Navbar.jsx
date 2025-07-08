import React, { useState } from "react";
import { datas } from "../../assets/assets";

const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // Toggle menu

  return (
    <>
      {/* Gooey Filter */}
      <svg style={{ display: "none" }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      {/* Desktop Navbar */}
      <nav
        className="hidden lg:w-[90%] max-w-6xl fixed top-6 left-1/2 -translate-x-1/2 z-50 lg:flex justify-between items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg px-6 py-3"
        style={{ filter: "url(#goo)" }}
      >
        <div className="text-xl font-bold text-white">
          <a href="#">{datas.contact.name}</a>
        </div>

        <ul className="flex space-x-4 text-lg font-medium">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`px-5 py-2 rounded-full transition-all duration-500 ${
                  activeSection === id
                    ? "bg-white/70 text-blue-600 shadow scale-105"
                    : "text-white hover:bg-white/70 hover:text-blue-600 hover:shadow hover:scale-105"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Search */}
        <div className="relative">
          <div className="absolute w-16 h-16 bg-blue-300 rounded-full animate-blob opacity-40 -top-6 -left-6"></div>
          <div className="absolute w-16 h-16 bg-purple-300 rounded-full animate-blob opacity-40 -top-6 -right-6"></div>
          <input
            type="text"
            placeholder="Search..."
            className="relative z-10 bg-white/50 backdrop-blur-sm border border-white/30 text-sm px-3 py-1 rounded-xl placeholder:text-gray-500 text-gray-800 focus:outline-none"
          />
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/30 text-white p-2 rounded-xl shadow backdrop-blur-md border border-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full px-6 z-40">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg py-4 px-6">
            <ul className="flex flex-col space-y-3 text-white text-lg">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => {
                      setActiveSection(id);
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === id
                        ? "bg-white/70 text-blue-600 shadow"
                        : "hover:bg-white/70 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
