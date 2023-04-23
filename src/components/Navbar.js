import React from "react";
import "../styles/Navbar.css";
import ProfileImg from "../images/profile.png";
import { FaHome, FaLaptop } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope, BiBook } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const navVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const Navbar = ({ nav, handleNav }) => {
	return (
		<AnimatePresence>
			<motion.nav
				initial={{ width: "0" }}
				animate={
					nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
				}
				className={nav ? "navbar active" : "navbar"}>
				<motion.div
					initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className='navbar-container'>
					<div className='img__cover'>
						<img src={ProfileImg} alt='Main' className='profile-pic-small' />
					</div>
					<ul className='mid-details'>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className='mid-links'>
							<FaHome className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Home
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className='mid-links'>
							<FiUser className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								About
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className='mid-links'>
							<FaLaptop className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Skills
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='experience'
							className='mid-links'>
							<BiServer className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Experience
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='education'
							className='mid-links'>
							<BiBook className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Education
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='works'
							className='mid-links'>
							<BiBookContent className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Projects
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className='mid-links'>
							<BiEnvelope className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Contact
							</li>
						</Link>
					</ul>
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
