import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import w from './CarWidget.module.css';


const CarWidget = () => {
    const { totalQuant } = useContext (CartContext);

    return (
        <>
            <div className={w.Btn}>
              <Link to='/cart'><span>🛒({ totalQuant })</span></Link>
            </div>
        </>
    )};

export default CarWidget;