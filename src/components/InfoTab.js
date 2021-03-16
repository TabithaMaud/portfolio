import React from 'react';
import './InfoTab.css';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import Slide from 'react-reveal/Slide';

function InfoTab(props) {
	return (
		<Slide left>
			<div className='info-tab'>
				<a
					href='https://github.com/TabithaMaud/'
					target='_blank'
					rel='noreferrer'>
					<Github size={24} />
				</a>
				<a
					href='https://www.linkedin.com/in/tabitha-perry/'
					target='_blank'
					rel='noreferrer'>
					<Linkedin size={24} />
				</a>{' '}
				<a
					href='https://www.instagram.com/tabitha_maud/'
					target='_blank'
					rel='noreferrer'>
					<Instagram size={24} />
				</a>
			</div>
		</Slide>
	);
}

export default InfoTab;
