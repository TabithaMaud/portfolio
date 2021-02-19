import React, { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ open, setNavbarClass, setOpen }) {
	const [hamburgerClass, setClass] = useState('hamburger');

	const handleClick = () => {
		!open ? setClass('hamburger-open') : setClass('hamburger');
		!open ? setNavbarClass('nav-bar-open') : setNavbarClass('nav-bar');
		setOpen(!open);
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
