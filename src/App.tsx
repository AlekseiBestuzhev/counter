import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppInterface } from 'components/AppInterface/AppInterface';
import { Counter } from 'components/AppInterface/Pages/CounterSimple/CounterSimple';

function App() {
	return (
		<BrowserRouter>
			<AppInterface>
				<Counter />
			</AppInterface>
		</BrowserRouter>
	);
}

export default App;
