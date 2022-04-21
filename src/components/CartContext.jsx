import React, { useState, createContext } from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    
    const addItem = (item) => console.log(item);

    const removeItem = (id) => {
        setCart([cart.filter((product) => product.id !==id)])
    };

    const clear = () => setCart([]);

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clear}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;