import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from 'components/AppInterface/Pages/Pages';
import { AppInterface } from 'components/AppInterface/AppInterface';

function App() {
	return (
		<BrowserRouter>
			<AppInterface>
				<Pages />
			</AppInterface>
		</BrowserRouter>
	);
}

export default App;
