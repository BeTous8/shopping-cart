import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";

const CartItem = ({data}) => {
    const {removeFromCart, updateQuantity} = useContext(CartContext);

    const subtotal = data.price * data.quantity;

    return (
        <div className={styles.cartItem}>
            <img src={data.image} className={styles.itemImage}></img>
            <div className={styles.itemInfo}>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <h3>${data.price}</h3>
            </div>
            <div className={styles.itemControl}>
                <button onClick={() => removeFromCart(data.id)}><Trash2 /></button>
                <div className={styles.quantityControl}>
                    <button onClick={() => {
                        if (data.quantity === 1) {
                            removeFromCart(data.id)
                        } else {
                            updateQuantity(data.id, data.quantity - 1)}
                        }
                    } >-</button>
                    <input type='number' value={data.quantity} onChange={(e) => updateQuantity(data.id, parseInt(e.target.value))}></input>
                    <button onClick={() => updateQuantity(data.id, data.quantity + 1)}>+</button>
                </div>
                <p>Subtotal: ${Math.round(subtotal*100)/100}</p>
            </div>
            
        </div>
        
    )
}

export default CartItem;