import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import DesignProjects from './components/DesignProjects';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

function App() {
	return (
		<div>
			<NavBar />
			<Landing />
			<About />
			<Landing />
			<Projects />
			<DesignProjects />
			<ContactMe />
		</div>
	);
}

export default App;
