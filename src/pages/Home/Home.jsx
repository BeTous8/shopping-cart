import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { Truck, Shield, Headphones, ShoppingBag } from 'lucide-react';

const Home = () => {

    return (
        <>
            <div className={styles.hero}>
                <h1>Welcome to ModernShop</h1>
                <p>Discover the latest in technology and innovation. Quality products, exceptional service, and unbeatable prices.</p>
                <button><Link to={"/shop"}>Shop Now</Link></button>
            </div>
            <div className={styles.features}>
                <h1>Why Choose ModernShop?</h1>
                <div className={styles.featuresContainer}>
                    <div>
                        <Truck className={styles.truck} size={60}/>
                        <h3>Fast Shipping</h3>
                        <p>Free shipping on orders over $50. Get your products delivered in 2-3 business days.</p>
                    </div>
                    <div>
                        <Shield className={styles.shield} size={60}/>
                        <h3>Secure Shopping</h3>
                        <p>Your payment information is protected with industry-standard encryption.</p>
                    </div>
                    <div>
                        <Headphones className={styles.headphones} size={60}/>
                        <h3>24/7 Support</h3>
                        <p>Our customer support team is available around the clock to help you.</p>
                    </div>
                </div>
            </div>
            <div className={styles.invite}>
                <h1>Ready to Start Shopping?</h1>
                <p>Browse our carefully curated collection of premium tech products and find exactly what you're looking for.</p>
                <button className={styles.exploreBtn}>
                    <ShoppingBag size={20}/>
                    <Link to={"/shop"}>Explore Product</Link>
                    </button>
            </div>
            
            
        </>
    )
};

export default Home