import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import DesignProjects from './components/DesignProjects';
import Landing from './components/Landing';
import NavBar from './components/NavBar/NavBar';
import ResumeModal from './components/ResumeModal';
import { Element } from 'react-scroll';
import { useState } from 'react';

function App() {
	const [openResume, setOpenResume] = useState('hide-resume');

	const showResume = (event) => {
		console.log(event.target.className);
		if (
			event.target.className === 'show-resume' ||
			event.target.className === 'close-resume' ||
			event.target.className === 'open-resume'
		)
			openResume === 'hide-resume'
				? setOpenResume('show-resume')
				: setOpenResume('hide-resume');
	};

	return (
		<main>
			<ResumeModal showResume={showResume} openResume={openResume} />
			<NavBar showResume={showResume} openResume={openResume} />
			<Element id='landing'>
				<Landing />
			</Element>
			<Element id='about'>
				<About />
			</Element>

			<Element id='work'>
				<Projects />
			</Element>
			<DesignProjects />
			<Element id='contact'>
				<ContactMe />
			</Element>
		</main>
	);
}

export default App;
