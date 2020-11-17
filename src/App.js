import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import DesignProjects from './components/DesignProjects';
import Landing from './components/Landing';
import NavBar from './components/NavBar/NavBar';
import { Element } from 'react-scroll';

function App() {
	return (
		<main>
			<NavBar />
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
