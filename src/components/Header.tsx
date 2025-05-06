
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="font-montserrat font-bold text-portfolio-navy text-xl">
            HR<span className="text-portfolio-highlight">/</span>Finance Pro
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="font-medium text-portfolio-charcoal hover:text-portfolio-highlight transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="font-medium text-portfolio-charcoal hover:text-portfolio-highlight transition-colors"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="font-medium text-portfolio-charcoal hover:text-portfolio-highlight transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="font-medium text-portfolio-charcoal hover:text-portfolio-highlight transition-colors"
          >
            Projects
          </a>
          <a 
            href="#socials" 
            className="font-medium text-portfolio-charcoal hover:text-portfolio-highlight transition-colors"
          >
            Socials
          </a>
        </nav>

        <a 
          href="/cv.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-portfolio-navy hover:bg-portfolio-blue">
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
