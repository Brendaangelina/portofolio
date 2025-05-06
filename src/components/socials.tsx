import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Socials = () => {
  return (
    <section id="socials" className="py-20 bg-portfolio-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-portfolio-gold uppercase tracking-wider font-semibold mb-2">Connect With Me</h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white">Social Profiles</h3>
          <div className="w-24 h-1 bg-portfolio-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="animate-on-scroll animate-fade-up flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
            <a 
              href="https://www.linkedin.com/in/brendaangelina/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-6 rounded-full mb-4"
            >
              <Linkedin className="h-12 w-12" />
            </a>
            <h4 className="text-xl font-bold mb-2">LinkedIn</h4>
            <p className="text-gray-300 text-center">Connect professionally and view my career history</p>
          </div>
          
          <div className="animate-on-scroll animate-fade-up flex flex-col items-center" style={{ animationDelay: "0.3s" }}>
            <a 
              href="https://instagram.com/brendaangelinaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-6 rounded-full mb-4"
            >
              <Instagram className="h-12 w-12" />
            </a>
            <h4 className="text-xl font-bold mb-2">Instagram</h4>
            <p className="text-gray-300 text-center">Follow me for insights on HR and Finance trends</p>
          </div>
          
          <div className="animate-on-scroll animate-fade-up flex flex-col items-center" style={{ animationDelay: "0.5s" }}>
            <a 
              href="mailto:brendaangelina4@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-6 rounded-full mb-4"
            >
              <Mail className="h-12 w-12" />
            </a>
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <p className="text-gray-300 text-center">Contact Me</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Socials;