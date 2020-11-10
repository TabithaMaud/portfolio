import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './NavBar.css';

function NavBar(props) {
	return (
		<nav>
			<ul>
				<Link
					to='landing'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>LOGO</li>
				</Link>
				<Link
					activeClass='active'
					to='about'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>About</li>
				</Link>
				<Link
					activeClass='active'
					to='experience'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>Experience</li>
				</Link>
				<Link
					activeClass='active'
					to='work'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>Work</li>
				</Link>
				<Link
					activeClass='active'
					to='contact'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
