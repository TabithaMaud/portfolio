import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
	// const [openResume, setOpenResume] = useState('hide-resume');

	// const showResume = (event) => {
	// 	if (
	// 		event.target.className === 'show-resume' ||
	// 		event.target.className === 'close-resume' ||
	// 		event.target.className === 'open-resume'
	// 	)
	// 		openResume === 'hide-resume'
	// 			? setOpenResume('show-resume')
	// 			: setOpenResume('hide-resume');
	// };

	return (
		<main>
			<NavBar />
			<Route to='/' exact component={Home} />
			<Route to='/resume.pdf' component={Resume} />
		</main>
	);
}

export default App;
