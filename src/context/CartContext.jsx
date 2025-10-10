import { useState, createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            // only update the quantity
            setCart(cart.map(item => 
                item.id === product.id
                ? {...item, quantity: item.quantity + quantity}
                : item
            ));
        } else {
            // add the new product
            setCart([...cart, {...product, quantity}])
        }          
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    }

    const updateQuantity = (productId, newQuantity) => {
        setCart(cart.map(item => 
            item.id === productId
            ? {...item, quantity: newQuantity}
            : item 
        ))
    }      
    

    const clearCart = () => {
        setCart([]);

    }


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
