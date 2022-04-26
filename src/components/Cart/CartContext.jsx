import React, { useState, createContext, useEffect} from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);

    const [totalQuant, setTotalQuant] = useState(0);

    const calculateQuant = () => setTotalQuant(cart.reduce((total, item) => (total += item.cant), 0));
    
    useEffect (() => {
        calculateQuant();
    }, [cart]);
    
    const addItem = (item) => {
    const indexProduct = cart.findIndex((cartItem)=>cartItem.id === item.id);
    if (indexProduct !== -1) {
        const newCart = [...cart];
        newCart[indexProduct].count = newCart[indexProduct].count + item.count;
        setCart(newCart);
    } else {
        setCart([...cart, item]);
    }
    };
    console.log(cart);

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