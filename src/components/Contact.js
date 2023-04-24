import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import "../styles/Contact.css";
import { MdLocationOn, MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className='heading-text'>Contact</p>
                </motion.div>
                <div className="contact-box">
                    <div className='contact-list'>
                        <div className="contact-item">
                            <div className='item-icon'><MdOutlineAlternateEmail /></div>
                            <p className='item-text'>brittanylin00@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <div className='item-icon'><MdPhone /></div>
                            <p className='item-text'>(+54) 9 11-3022-0578</p>
                        </div>
                        <div className="contact-item">
                            <div className='item-icon'><MdLocationOn /></div>
                            <p className='item-text'>Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className="contact-hello">
                        <ul className='nav-links'>
                            <li><Link  to="//www.linkedin.com/in/linbrittany" target='_blank' className='contact-icon'><FaLinkedin /></Link></li>
                            <li><Link  to="//github.com/linbrittany" target='_blank' className='contact-icon'><BsGithub /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
