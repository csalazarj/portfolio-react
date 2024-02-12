import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './Navbar.css'

export default function Navbar() {
	const navRef = useRef("");

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}
	return (
		<>
			{/* <section className="navbar-section">
				<a href='#' className='navbar-logo'>Logo</a>
				<ul className="navbar-list">
					<li className="navbar-list-item">Home</li>
					<li className="navbar-list-item">Skills</li>
					<li className="navbar-list-item">Portfolio</li>
					<li className="navbar-list-item">Contact</li>
				</ul>
			</section> */}

			<header>
				<h3 href="#">
					Logo
				</h3>
				<nav ref={navRef}>
					<a>Home</a>
					<a>Skills</a>
					<a>Portfolio</a>
					<a>Contact</a>
					<button className='nav-btn nav-close-btn' onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className='nav-btn' onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
		</>
	)
}
