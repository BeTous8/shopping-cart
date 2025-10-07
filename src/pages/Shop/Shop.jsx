import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from './Shop.module.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";



const Shop = () => {
    const [productData, setProductData] = useState([]);
    const {cart} = useContext(CartContext);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => setProductData(data));
    }, []);

    console.log('Cart from context:', cart);  // Add this to test
    console.log('Products:', productData);


    return (
        <div className={styles.shopContainer}>
            <h1>Our Products</h1>
            <p>Discover our premium collection of tech products, carefully selected for quality and innovation.</p>
            <div className={styles.productGrid}>
                {productData.map(product => {
                return <ProductCard data={product} key={product.id} />
            })}
            </div>
            
        </div>
    )
};

export default Shop;