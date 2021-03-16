import React from 'react';
import './Landing.css';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

function Landing(props) {
	return (
		<section className='landing'>
			<h1>I'm Tabitha.</h1>
			<Fade>
				<p>
					A Software Engineer based in Boston, MA with a background in design.
					Driven by the challenge of designing each line of code to not only
					satisfy its practical purpose but also to maximize the user experience
					it’s driving.
				</p>
				{/* <p>
				A Software Engineer based in Boston, MA with a background in design.
			</p> */}
				<Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
					<button>Contact Me</button>
				</Link>
				<div>
					<Link
						to='about'
						className='arrow-stage'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<i className='fa fa-arrow-down bounce-1'></i>
					</Link>
				</div>
			</Fade>
		</section>
	);
}

export default Landing;
