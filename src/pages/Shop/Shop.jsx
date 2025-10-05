import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from './Shop.module.css'



const Shop = () => {
    const [productData, setProductData] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => setProductData(data));
    }, []);

    console.log(productData)


    return (
        <div className={styles.shopContainer}>
            <h1>We have the best products in the market</h1>
            <div className={styles.productGrid}>
                {productData.map(product => {
                return <ProductCard data={product} key={product.id} />
            })}
            </div>
            
        </div>
    )
};

export default Shop;