import { useRef } from "react";
import './navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="navbar-container">
			<h3 >LOGO</h3>
			<nav ref={navRef}>
				<a onClick={showNavbar} href="#">Home</a>
				<a onClick={showNavbar} href="#">Biz Kimiz?</a>
				<a onClick={showNavbar} href="#">Galeri</a>
				<a onClick={showNavbar} href="#">İletişim</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<i class="fa-solid fa-bars"></i>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<i class="fa-solid fa-bars"></i>
			</button>
		</header>
	);
}

export default Navbar;