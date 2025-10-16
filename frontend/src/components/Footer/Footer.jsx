import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col bg-[#1e293b] items-center justify-around border-t border-[#334155] text-sm text-gray-800/70 py-16 mt-12">
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">Home</a>
        <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">About</a>
        <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">Projects</a>
        <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">Contact</a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        {/* GitHub */}
        <a href="https://github.com/winminthantdev" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.774.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.467-2.382 1.235-3.222-.123-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.046.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.625-5.478 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.903-.015 3.293 0 .323.216.702.825.583C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/winminthant.gwin" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="currentColor"/>
          </svg>
        </a>

        {/* Telegram */}
        <a href="https://t.me/winminthant" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12C24 5.372 18.628 0 12 0zm5.078 8.312l-1.836 8.674c-.139.608-.502.756-1.017.472l-2.818-2.073-1.36 1.31c-.15.15-.275.275-.563.275l.2-2.833 5.16-4.66c.225-.2-.05-.312-.35-.112l-6.392 4.03-2.756-.862c-.6-.188-.612-.6.125-.888l10.774-4.157c.5-.188.938.125.775.924z" fill="currentColor"/>
          </svg>
        </a>

        {/* Discord */}
        <a href="https://discord.com/users/_winminthant" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.104 4.552a58.985 58.985 0 0 0-14.01-4.552s-.66 1.18-1.36 2.17c-4.145-1.26-8.334-1.27-12.426 0-.7-1-1.36-2.17-1.36-2.17a58.808 58.808 0 0 0-14.01 4.552C10.033 21.124 7.89 36.474 7.89 36.474s3.92 7.088 14.24 6.896c0 0 1.2-1.445 2.17-2.687-5.56-1.684-7.66-5.052-7.66-5.052s.64.384 1.72.944c3.125 1.33 5.774 1.672 7.656 1.584 0 0 .58-.7.96-1.256-3.04-.944-5.164-2.688-6.216-4.064 0 0 5.288-2.656 14.432-2.656 9.144 0 14.432 2.656 14.432 2.656-.96 1.376-3.176 3.12-6.2 4.064.36.584.94 1.256.94 1.256 1.882.088 4.53-.254 7.654-1.584 1.08-.56 1.72-.944 1.72-.944s-2.1 3.368-7.66 5.052c.968 1.242 2.172 2.687 2.172 2.687 10.32.192 14.24-6.896 14.24-6.896S61.5 21.124 60.104 4.552z" fill="currentColor"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center">
        Copyright © {currentYear} <a href="https://winminthant.xyz">Win Min Thant</a>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
