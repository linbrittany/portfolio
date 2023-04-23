import React from 'react';
import "../styles/Experience.css"
import {BiBriefcase} from "react-icons/bi"
import { motion } from "framer-motion";

const Experience = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='experience'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className='heading-text'>Experience</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiBriefcase className='services-icon' />
                        <div className='services-desc'>
                            <p className='services-date'>September 2022 - Present</p>
                            <p className='services-title'>Backend Developer</p>
                            <p className='services-loc'>Vizrt</p>
                        </div>
                    </div>
                    <div className="services-card">
                    <BiBriefcase className='services-icon' />
                        <div className='services-desc'>
                            <p className='services-date'>March 2023 - Present</p>
                            <p className='services-title'>Teacher Assistant</p>
                            <p className='services-loc'>Advanced Numerical Methods at ITBA</p>
                        </div>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Experience;
