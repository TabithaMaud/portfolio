import React from 'react';
import './ContactMe.css';

function ContactMe(props) {
	return (
		<section className='contact-section'>
			<h2>Drop me a line.</h2>
			<p>
				Currently I'm looking for new opportunities, my inbox is always open.
				Whether you have an opportunity, question or just want to say hi.
			</p>
			<a className='button email' href='mailto:tabitha.m.@gmail.com'>
				contact me
			</a>
		</section>
	);
}

export default ContactMe;
