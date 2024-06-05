import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Repaso de React con Ruben Mendoza</p>
				<FirstComp />
			</header>
		</div>
	);
}

export default App;
