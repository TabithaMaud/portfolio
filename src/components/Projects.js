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
					src={movieCreds}
					alt='movie creds screen shot'
				/>
				<h3>Movie Creds</h3>
				<p className='tech-list'>
					React / JavaScript / CSS / The Movie Database API
				</p>
				<div className='project-links'>
					<a
						href='https://github.com/TabithaMaud/project-movie-app'
						target='_blank'
						rel='noreferrer'>
						<Github size={24} />
					</a>

					<a
						href='https://calm-plateau-32961.herokuapp.com/'
						target='_blank'
						rel='noreferrer'>
						live app
						{/* <BoxArrowUpRight size={20} /> */}
					</a>
					<a
						href='https://www.linkedin.com/pulse/my-first-react-app-movie-creds-tabitha-perry/'
						target='_blank'
						rel='noreferrer'>
						read more
						{/* <ThreeDots size={24}  /> */}
					</a>
				</div>
				<p className='description'>
					Movie Creds is an app that focuses on one incredibly common question,
					what else were they in?
				</p>
			</div>
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
					<a
						href='https://github.com/My-Power-STN39M-Hopefully'
						target='_blank'
						rel='noreferrer'>
						<Github size={24} />
					</a>
					<a
						href='https://www.linkedin.com/pulse/goodegg-police-accountability-app-tabitha-perry/'
						target='_blank'
						rel='noreferrer'>
						read more
						{/* <ThreeDots size={24} /> */}
					</a>
				</div>
				<p className='description'>
					A fullstack app made for users to anonymously report incidents with
					law enforcement to the community in a public and secure manner. Allows
					all visitors to see the community's log of incidents.
				</p>
			</div>
			<div className='project'>
				<img className='portfolio-img' src={simon} alt='good egg screen shot' />
				<h3>Simon Says</h3>
				<p className='tech-list'>HTML / JavaScript / CSS / Local Storage</p>
				<div className='project-links'>
					<a
						href='https://github.com/TabithaMaud/simon-says'
						target='_blank'
						rel='noreferrer'>
						<Github size={24} />
					</a>
					<a
						href='https://tabithamaud.github.io/simon-says/'
						target='_blank'
						rel='noreferrer'>
						live app
						{/* <BoxArrowUpRight size={20} /> */}
					</a>
				</div>
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
