import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
// importing axios
import axios from 'axios';

// API URL
const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {
	const [products, setProducts] = useState([]);

	// We use async because we might wait for an answer from the API
	useEffect(async () => {
		// axios perform the request to the API
		const response = await axios(API);
		setProducts(response.data);
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
