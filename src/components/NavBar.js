import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './NavBar.css';

function NavBar(props) {
	// const scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };
	return (
		<nav>
			<Link to='landing' spy={true} smooth={true} offset={-70} duration={500}>
				<div>LOGO</div>
			</Link>
			<ul>
				<Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
					<li activeClass='active'>About</li>
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
				</Link>{' '}
				<Link
					activeClass='active'
					to='contact'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<li>RESUME</li>
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
