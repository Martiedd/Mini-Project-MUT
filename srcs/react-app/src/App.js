import './App.css';
import { FaSignOutAlt, FaBell, FaUserCircle } from 'react-icons/fa';
import logo from './assets/MUT_LOGO_crop.png';

function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<div className="navbar-left">
					<a href="#home" className="logo">
						<img src={logo} alt="MUT Logo" />
					</a>

					<ul className="navbar-links">
						<li><a href="#reserve">Reserve</a></li>
						<li><a href="#history">History</a></li>
						<li><a href="#management">Management</a></li>
						<li><a href="#master">Master</a></li>
						<li><a href="#report">Report</a></li>
					</ul>
				</div>

				<div className="navbar-icons">
					<a href="#signout" className="navbar-icon"><FaSignOutAlt /></a>
					<a href="#notifications" className="navbar-icon"><FaBell /></a>
					<a href="#profile" className="navbar-icon"><FaUserCircle /></a>
				</div>
			</nav>
		</div>
	);
}

export default App;
