import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

// Contexts
import { CartContext } from '../contexts';

const ShoppingCart = () => {
	const context = useContext(CartContext);

	const getCartTotal = () => {
		return context.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{context.cart.map(item => (
				<Item key={item.id} remove={context.removeItem} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
