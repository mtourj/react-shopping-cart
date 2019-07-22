import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Context imports
import { CartContext } from '../contexts';

const Navigation = props => {
	const context = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
