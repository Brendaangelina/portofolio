
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-charcoal text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Brenda Angelina. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-portfolio-highlight transition-colors">About</a>
            <a href="#skills" className="hover:text-portfolio-highlight transition-colors">Skills</a>
            <a href="#experience" className="hover:text-portfolio-highlight transition-colors">Experience</a>
            <a href="#projects" className="hover:text-portfolio-highlight transition-colors">Projects</a>
            <a href="#socials" className="hover:text-portfolio-highlight transition-colors">Socials</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
