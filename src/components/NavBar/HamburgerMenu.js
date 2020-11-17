import React, { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ open, setNavbarClass, setOpen }) {
	const [hamburgerClass, setClass] = useState('hamburger');

	const handleClick = () => {
		setOpen(!open);
		open ? setClass('hamburger-open') : setClass('hamburger');
		open ? setNavbarClass('nav-bar-open') : setNavbarClass('nav-bar');
		// if (open) {
		// 	setClass('hamburger-open');
		// 	setNavbarClass('nav-bar-open');
		// } else {
		// 	setClass('hamburger');
		// 	setNavbarClass('nav-bar');
		// }
	};

	return (
		<div className={hamburgerClass} open={open} onClick={handleClick}>
			<div />
			<div />
			<div />
		</div>
	);
}

export default HamburgerMenu;
