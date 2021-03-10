import React from 'react';
import './About.css';
import photo from '../images/photo.jpeg';

function About(props) {
	return (
		<section className='about'>
			<div className='top'>
				<img src={photo} alt='Tabitha Perry'></img>
				<div>
					<h2>About</h2>

					<p>
						My education in design shapes how I approach coding and achieve the
						best functionality possible for the given task. I am a fullstack
						software engineer with a strong passion for user focused software
						engineering.
					</p>
				</div>
			</div>
			<div className='skills'>
				<div>
					<h3>
						<span>Software</span> Expertise
					</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Express</li>
						<li>Node.js</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>PostgresSQL</li>
						<li>Postman</li>
						<li>Git</li>
						<li>Python</li>
						<li>Handlebars</li>
					</ul>{' '}
				</div>
				<div>
					<h3>
						<span>Design</span> Expertise
					</h3>
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
				<div className='edu'>
					<h3>Education</h3>
					<ul className='education'>
						<li>
							<p>GENERAL ASSEMBLY / BOSTON / 2021</p>
							<p> Certificate - Python Programming </p>
						</li>
						<li>
							<p>GENERAL ASSEMBLY / BOSTON / 2020 </p>
							<p> Certificate - Software Engineering Immersive</p>
						</li>
						<li>
							<p>CITY COLLEGE / SAN DIEGO / 2019</p>
							<p> AAS - Graphic Design</p>
						</li>
						<li>
							<p>MASSART / BOSTON / 2010 </p>
							<p> BFA - Communication Design </p>
						</li>
					</ul>
				</div>
			</div>
			<div className='line-break'></div>
		</section>
	);
}

export default About;
