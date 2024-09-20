import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Navbar */}
				<nav className="navbar">
					<ul className="navbar-list">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">Reserve</a></li>
						<li><a href="#services">History</a></li>
						<li><a href="#contact">Management</a></li>
						<li><a href="#contact">Master</a></li>
						<li><a href="#contact">Report</a></li>
					</ul>
				</nav>

				{/* Main Content */}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
