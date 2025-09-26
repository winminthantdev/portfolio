import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { datas } from "../../assets/assets";
import "./Navbar.css"

const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0, width: "80%" }}
        animate={{
          y: 0,
          opacity: 1,
          width: scrolled ? "60%" : "80%",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 justify-between items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-lg px-6 py-3"
        style={{ filter: "url(#goo)" }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl font-bold text-white"
        >
          <a href="#">{datas.contact.name}</a>
        </motion.div>

        {/* Nav Links */}
        <ul className="flex space-x-2 font-medium">
          {navItems.map(({ id, label }, index) => (
            <motion.li
              key={id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`font-bold rounded-full transition-all duration-500 px-5 py-2 ${
                  activeSection === id
                    ? "underlines"
                    : "text-white hover-effects"
                }`}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed top-20 left-0 w-full px-6 z-40"
          >
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg py-4 px-6">
              <ul className="flex flex-col space-y-3 text-white text-lg">
                {navItems.map(({ id, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
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
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
