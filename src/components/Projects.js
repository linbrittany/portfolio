import React from "react";
import "../styles/Projects.css";
import { IoOpenOutline } from "react-icons/io5";
import { FiFolder, FiGithub } from "react-icons/fi";
import { WorkData } from "../data/ProjectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='works' id='works'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}
						className='heading'>
						<p className='heading-sub-text'>What I've worked on</p>
						<p className='heading-text'>Projects</p>
					</motion.div>

					<motion.div
						className='works-box'
						initial={{ opacity: 0 }}
						whileInView={fade}>
						{WorkData.map((w, index) => {
							return (
								<div key={index}>
									<Link to={w.gitlink} target='_blank' className='work-link-group'>
										<div className='works-card'>
												<div className='mid-work'>
													<p className='work-title'>{w.title}</p>
													<p className='work-desc'>{w.desc}</p>
												</div>
												<div className='bottom-work'>
													{w.tech.map((e, index) => {
														return <div className='tech-tag'>{e}</div>;
													})}
												</div>
										</div>
									</Link>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Projects;
