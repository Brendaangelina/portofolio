
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/socials';
import Footer from '@/components/Footer';
import AnimationObserver from '@/components/AnimationObserver';
import Socials from '@/components/socials';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnimationObserver />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
};

export default Index;
