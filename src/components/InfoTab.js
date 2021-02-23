import React from 'react';
import './InfoTab.css';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';

function InfoTab(props) {
	return (
		<div className='info-tab'>
			<Github size={24} />
			<Linkedin size={24} />
			<Instagram size={24} />
		</div>
	);
}

export default InfoTab;
