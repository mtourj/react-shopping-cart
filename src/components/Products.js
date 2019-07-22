import React, {useContext} from 'react';

// Components
import Product from './Product';

// Contexts
import { ProductContext } from '../contexts';

const Products = () => {
	const context = useContext(ProductContext);

	return (
		<div className="products-container">
			{context.products.map((product, index) => (
				<Product
					key={index}
					product={product}
					addItem={context.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
