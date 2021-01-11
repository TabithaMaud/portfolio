import React from 'react';
import './About.css';

function About(props) {
	return (
		<section className='about'>
			<h2>About</h2>
			<p>
				My background in graphic design led me to discover my passion for user
				focused software engineering. My education in UX design shapes how I
				approach coding and helps me achieve the best functionality possible for
				the given task. I am a fullstack software engineer with a strong passion
				for frontend work.
			</p>
			<div className='skills'>
				<div>
					<h3>Software Expertise</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Express</li>
						<li>Node.js</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>SQL</li>
						<li>PostgresSQL</li>
						<li>Postman</li>
						<li>Git</li>
					</ul>{' '}
				</div>
				<div>
					<h3>Design</h3>
					<ul>
						<li>Sketch</li>
						<li>InVision</li>
						<li>Photoshop</li>
						<li>Indesign</li>
						<li>Illustrator</li>
						<li>Lightroom</li>
						<li>AfterEffects</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default About;
