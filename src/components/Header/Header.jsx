import { Link } from "react-router-dom";
import { Store, ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Header = () => {
    const {cart} = useContext(CartContext);

    const sum = cart.reduce((accumulator, item) => {
        return accumulator + item.quantity;
    }, 0);

    console.log('the sum is ', sum)



    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <button >
                        <Link className={styles.logoContainer} to={'/'}>
                            <Store size={30} color="#4692daff" />
                            <h2>ModernShop</h2>
                        </Link> 
                    </button>
                    
                </div>
                <div className={styles.navBar}>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li className={styles.headingCart}>
                            <div className={styles.cartIconWrapper}>
                                <ShoppingCart size={22} color="#393a3aff" />
                                {sum > 0 && <div className={styles.counter}>{sum}</div>}    
                            </div>
                            <Link to={'/cart'}>Cart</Link>
                            
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </>
        
    )
}

export default Header;