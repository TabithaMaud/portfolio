import React from 'react';
import './ContactMe.css';
import Fade from 'react-reveal/Fade';

function ContactMe(props) {
	return (
		<section className='contact-section'>
			<Fade>
				<h2>Drop me a line.</h2>
				<p>
					Currently I'm looking for new opportunities, my inbox is always open.
					Whether you have an opportunity, question or just want to say hi.
				</p>
				<a className='button email' href='mailto:tabitha.m.perry@gmail.com'>
					Contact Me
				</a>
			</Fade>
		</section>
	);
}

export default ContactMe;
