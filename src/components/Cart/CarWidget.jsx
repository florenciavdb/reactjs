import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import w from './CarWidget.module.css';

const CarWidget = () => {
    const { quantItems } = useContext (CartContext);


    return (
        <div className={w.Btn}>
        <Link to={`/cart`}>🛒({ quantItems })</Link>
        </div>
    )
};

export default CarWidget;