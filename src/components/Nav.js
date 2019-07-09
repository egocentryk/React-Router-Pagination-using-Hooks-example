import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/senators">
					<li>US Senators</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
