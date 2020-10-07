import React from 'react';
import Navbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import Nav, { Link } from 'react-bootstrap/Nav';

export default ({ getNewApiKey }) => (
	<header>
		<Navbar expand="lg" className="navbar-dark">
			<Brand href="#home">Laboration 2: JavaScript/React/AJAX</Brand>
			<Toggle aria-controls="basic-navbar-nav" />
			<Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link href="https://www.forverkliga.se/JavaScript/api/crud.php">API Docs</Link>
				</Nav>
				<strong className="get-new-api" onClick={getNewApiKey}>
					Hämta ny API-nyckel
				</strong>
			</Collapse>
		</Navbar>
	</header>
);
