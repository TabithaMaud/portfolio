import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.css';
import InfoTab from './components/InfoTab';

function App() {
	return (
		<main>
			<InfoTab />
			<Route path='/' exact component={Home} />
			<Route path='/resume.pdf' exact component={Resume} />
		</main>
	);
}

export default App;
