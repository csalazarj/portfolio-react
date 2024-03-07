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
			<header>
				<h3 href="#">
					Cristhian Salazar J.
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
