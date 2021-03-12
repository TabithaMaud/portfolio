import React, { useState } from 'react';
import About from './About';
import ContactMe from './ContactMe';
import Projects from './Projects';
import DesignProjects from './DesignProjects';
import Landing from './Landing';
import { Element } from 'react-scroll';
import NavBar from './NavBar/NavBar';

function Home(props) {
	const [open, setOpen] = useState(false);

	return (
		<div className='home'>
			<NavBar open={open} setOpen={setOpen} />
			<Element id='landing'>
				<Landing />
			</Element>
			<Element id='about'>
				<About />
			</Element>
			<Element id='work'>
				<Projects setOpen={setOpen} />
			</Element>
			<DesignProjects />
			<Element id='contact'>
				<ContactMe />
			</Element>
		</div>
	);
}

export default Home;
