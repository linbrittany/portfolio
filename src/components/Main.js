import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
    </div>
  )
};

export default Main;
