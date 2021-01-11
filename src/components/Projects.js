import React from 'react';
import simon from '../images/simon.jpg';
import goodEgg from '../images/good-egg.jpg';
import movieCreds from '../images/movie-creds.jpg';
import './Projects.css';

function Projects(props) {
	return (
		<section>
			<h2>Developer Work</h2>
			<h3>Good Egg</h3>
			<img
				className='portfolio-img'
				src={goodEgg}
				alt='good egg app screen shot'
			/>
			<h3>Movie Creds</h3>
			<img
				className='portfolio-img'
				src={movieCreds}
				alt='movie creds screen shot'
			/>
			<h3>Simon Says</h3>
			<img className='portfolio-img' src={simon} alt='good egg screen shot' />
		</section>
	);
}

export default Projects;
