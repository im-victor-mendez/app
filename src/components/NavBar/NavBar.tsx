import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar: React.FC = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<li className='navbar-item'>
					<Link to='/inventory' className='navbar-link'>
						Inventory
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/orders' className='navbar-link'>
						Orders
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/menu' className='navbar-link'>
						Menu
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
