
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-portfolio-gold uppercase tracking-wider font-semibold mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white">Contact Information</h3>
          <div className="w-24 h-1 bg-portfolio-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-xl font-montserrat font-bold mb-6">Contact Details</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-portfolio-gold mr-4 mt-1" />
                <div>
                  <h5 className="text-portfolio-highlight mb-1">Email</h5>
                  <p className="text-gray-300">jane.prentice@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-portfolio-gold mr-4 mt-1" />
                <div>
                  <h5 className="text-portfolio-highlight mb-1">Phone</h5>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-portfolio-gold mr-4 mt-1" />
                <div>
                  <h5 className="text-portfolio-highlight mb-1">Location</h5>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-montserrat font-bold mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-3 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-3 rounded-full">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-portfolio-light-blue hover:bg-portfolio-highlight transition-colors p-3 rounded-full">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-xl font-montserrat font-bold mb-6">Send a Message</h4>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-portfolio-blue border-portfolio-light-blue text-white placeholder:text-gray-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-portfolio-blue border-portfolio-light-blue text-white placeholder:text-gray-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-1">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-portfolio-blue border-portfolio-light-blue text-white placeholder:text-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-portfolio-blue border-portfolio-light-blue text-white placeholder:text-gray-300 resize-none"
                />
              </div>
              
              <Button className="w-full bg-portfolio-gold hover:bg-yellow-500 text-portfolio-navy">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
