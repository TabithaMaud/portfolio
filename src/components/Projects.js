import React from 'react';
import simon from '../images/simon.jpg';
import goodEgg from '../images/good-egg.jpg';
import movieCreds from '../images/movie-creds.jpg';
import './Projects.css';
import { Github, ThreeDots, BoxArrowUpRight } from 'react-bootstrap-icons';

function Projects(props) {
	return (
		<section className='work'>
			<h2>Developer Work</h2>
			<div className='project'>
				<img
					className='portfolio-img'
					src={goodEgg}
					alt='good egg app screen shot'
				/>
				<h3>Good Egg</h3>
				<p className='tech-list'>
					React / JavaScript / CSS / MongoDB / Express / Node.js
				</p>
				<div className='project-links'>
					<Github size={28} />
					<BoxArrowUpRight size={24} />
					<ThreeDots size={24} />
				</div>
				<p className='description'>
					A fullstack app made for users to anonymously report incidents to the
					community in a public and secure manner. Allows all visitors to see
					the community's log of incidents involving local law enforcement.
				</p>
			</div>
			<div className='project'>
				<img
					className='portfolio-img'
					src={movieCreds}
					alt='movie creds screen shot'
				/>
				<h3>Movie Creds</h3>
				<p className='tech-list'>
					React / JavaScript / CSS / The Movie Database API
				</p>
				<div className='project-links'>
					<Github size={28} />
					<BoxArrowUpRight size={24} />
					<ThreeDots size={24} />
				</div>
				<p className='description'>
					Movie Creds is an app that focuses on one incredibly common question,
					what else was an actor in?
				</p>
			</div>
			<div className='project'>
				<img className='portfolio-img' src={simon} alt='good egg screen shot' />
				<div className='project-links'>
					<Github size={28} />
					<BoxArrowUpRight size={24} />
					<ThreeDots size={24} />
				</div>
				<h3>Simon Says</h3>
				<p className='tech-list'>HTML / JavaScript / CSS / Local Storage</p>
				<p className='description'>
					Simon Says Pick A Color is a game for players to test their memory
					skills
				</p>
			</div>
			<div className='line-break'></div>
		</section>
	);
}

export default Projects;
