import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {
    const [cart, setCart ] = useState ([]);
    
    const [totalValue, setTotalValue] = useState(0);

    const calcValue = () => setTotalValue(cart.reduce((total, item) => (total += item.price * item.quant), 0))

    useEffect (() => {
        calcValue()
    }, [cart]);

    const [totalQuant, setTotalQuant] = useState(0);

    const calcQuant = () => setTotalQuant(cart.reduce((total, item) => (total += item.quant), 0))

    useEffect (() => {
        calcQuant()
    }, [cart]);
    

    const addItem = (item, quant) => { 
        item.quant = quant;
    const indexProduct = cart.findIndex((cartItem)=>cartItem.id === item.id);
    if (indexProduct !== -1) {
        const newCart = [...cart];
        newCart[indexProduct].count = newCart[indexProduct].count + item.count;
        setCart(newCart);
    } else {
        setCart([...cart, item]);
    }
    };
    /*console.log(cart);*/

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !==id))
    };

    const buyAll = () => setCart ([]);

    const quant = () => {
        return cart.reduce((total, item) => total + item.count * item.price, 0)
    }

    const quantItems = () => {
        return cart.reduce((total, item) => total + item.count, 0)
    }

    const clear = () => setCart([]);

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, buyAll, quant, quantItems, totalValue, totalQuant}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;