
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-r from-portfolio-light-gray to-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="w-64 h-64 mx-auto md:mx-0 rounded-full border-4 border-portfolio-highlight shadow-xl overflow-hidden">
            <img
              src="img/profilb.jpeg" // Make sure this image exists in your public/images folder
              alt="Brenda Angelina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:pl-12 animate-fade-up">
          <h2 className="text-xl text-portfolio-gold uppercase tracking-wider font-semibold mb-2">
            HR/GA & Finance Professional
          </h2>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-portfolio-navy mb-6">
            Brenda Angelina
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Motivated and detail-oriented professional with over 3 years of experience in
            finance, general affairs, and customer-facing roles across multiple industries.
            Skilled in managing financial transactions, handling administrative operations,
            organizing travel logistics, and maintaining professional service standards.
            Proven ability to work independently and collaboratively in dynamic
            environments. Enthusiastic about contributing to hospitality operations with both
            financial accuracy and operational excellence.
          </p>
          <div className="flex flex-wrap gap-4">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
