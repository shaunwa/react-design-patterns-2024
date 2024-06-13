import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [showSuccess, setShowSuccess] = useState('');
    
    async function onAddToCart(productId) {
        setShowSuccess(productId);
        setCartIds([...cartIds, productId]);

        try {
            const response = await axios.post('http://localhost:3001/cart', { productId });
            setCartIds(response.data);
        } catch (e) {
            alert('Error!');
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            const response = await axios.get('http://localhost:3001/products');
            setProducts(response.data);
        }

        const loadCartIds = async () => {
            const response = await axios.get('http://localhost:3001/cart');
            setCartIds(response.data);
        }

        loadProducts();
        loadCartIds();
    }, []);

    console.log(products);

    return (
        <>
        <h3>You have {cartIds.length} items in your cart</h3>
        {products.map(product => (
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {showSuccess === product.id ? <button>Success!</button> : <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>}
            </div>
        ))}
        </>
    );
}