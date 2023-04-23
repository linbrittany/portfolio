import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import "../styles/Contact.css";
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
                    <p className='heading-text'>Say Hello</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>If you have any question or request, please contact me!</p>
                        </div>
                        <div className="contact-hello">
                            <p>Contacts</p>
                            <ul className='nav-links'>
                                <li><Link  to="//www.linkedin.com/in/linbrittany" target='_blank' className='contact-icon'><FaLinkedin /></Link></li>
                                <li><Link  to="//github.com/linbrittany" target='_blank' className='contact-icon'><BsGithub /></Link></li>
                                <li><Link  to="//mailto:brittanylin00@gmail.com" target='_blank' className='contact-icon'><BiEnvelope /></Link></li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            action="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Your Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Hi, I would like to contact you!"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
