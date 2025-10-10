import { useContext, useState } from 'react';
import style from './ProductCard.module.css';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({data}) => {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(CartContext)
    

    const increment = () => {
        setQuantity(quantity + 1);
        
    }

    const decrement = () => {
        setQuantity(quantity - 1);
        
    }

    const handleChange = (event) => {
        const valueStr = event.target.value;
        const valueNum = parseInt(valueStr);
        valueNum >= 1 ? setQuantity(valueNum) : setQuantity(1)   
    }


    return (
        <div className={style.ProductCard}>
            <img src={data.image} alt={data.title} />
            <div className={style.cardContent}>
                <h3>{data.title}</h3>
                <p className={style.description}>{data.description}</p>
                <p className={style.price}>${data.price}</p>
            </div>
            <div className={style.quantity}>
                <div className={style.quantityTitle}>
                    <p>Quantity</p>
                </div>
                <div className={style.quantityControl}>
                    <button onClick={decrement} disabled={quantity === 1}>-</button>
                    <input type='number' value={quantity} onChange={handleChange}></input>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <button className={style.AtCButton} onClick={() => addToCart(data, quantity)}>Add to Cart</button>
            
            
        </div>
        
        
       
    )
}

export default ProductCard;