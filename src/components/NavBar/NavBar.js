import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import HamburgerMenu from './HamburgerMenu';
import logo from '../../images/logo.png';

import './NavBar.css';

function NavBar(props) {
	const [open, setOpen] = useState(false);
	const [navbarClass, setNavbarClass] = useState('nav-bar');

	return (
		<nav className={navbarClass}>
			<div className='logo'>
				<Link to='landing' spy={true} smooth={true} offset={-70} duration={500}>
					<img src={logo} alt='logo'></img>
				</Link>
			</div>
			<ul>
				<li activeclass='active'>
					<Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link
						activeclass='active'
						to='work'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link
						activeclass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Contact
					</Link>
				</li>
				<li>
					<button>RESUME</button>
				</li>
			</ul>
			<HamburgerMenu
				setOpen={setOpen}
				open={open}
				setNavbarClass={setNavbarClass}
			/>
		</nav>
	);
}

export default NavBar;
