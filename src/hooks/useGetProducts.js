import { useEffect, useState } from 'react';
import axios from 'axios';

// It will receive a parameter called API 
const useGetProduct = (API) => {

    const [products, setProducts] = useState([]);

    // We use async because we might wait for an answer from the API
    useEffect(async () => {
        // axios perform the request to the API
        const response = await axios(API);
        setProducts(response.data);
    }, []);

    return products;
};

export default useGetProduct;

