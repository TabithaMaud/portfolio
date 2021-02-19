import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<main>
			<Route path='/' exact component={Home} />
			<Route path='/resume.pdf' exact component={Resume} />
		</main>
	);
}

export default App;
