import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem.jsx"
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
    const {cart, clearCart} = useContext(CartContext);

    //calculate the sum of products' price
    const preTax = cart.reduce((accumulator, item) => {
        return Math.round((accumulator + item.price * item.quantity)*100)/100
    }, 0);

    // console.log(cart)
    console.log("the total price before tax: ", typeof(preTax))

    const tax = (price) => {
        return Math.round(price * .08 * 100) / 100
        
    } 
    console.log("tax type: ", typeof(tax(preTax)))


    return (
        <div className={styles.cartPage}>
            <div className={styles.itemsList}>
                {cart.length === 0
            ? <div className={styles.emptyCart}>
                <ShoppingBag className={styles.shoppingBag} />
                <h1>Your cart is empty</h1>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <button><Link to={'/shop'}>Continue Shopping</Link></button>
            </div>
            : cart.map(item => 
                <CartItem data={item} key={item.id}/>
            )}

            </div>
            <div className={styles.orderSummary}>
                <h2>Order Summary</h2>
                <div className={styles.subtotal}>
                    <p>Subtotal</p>
                    <p>{preTax}</p>
                </div>
                <div className={styles.shipping}>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className={styles.tax}>
                    <p>Tax</p>
                    <p>{tax(preTax)}</p>
                </div>
                <div className={styles.total}>
                    <p>Total</p>
                    <p>{Math.round((preTax + tax(preTax))*100)/100}</p>
                </div>
                <button>Proceed to Checkout</button>
                <button onClick={() => clearCart()}>Clear Cart</button>
                <button><Link to={'/shop'}>Continue Shopping</Link></button>
            </div>    
        </div>
        
    )
};

export default Cart;