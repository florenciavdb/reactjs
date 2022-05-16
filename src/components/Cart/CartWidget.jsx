import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import w from './CartWidget.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
    let { totalQuant } = useContext (CartContext);

    return (
        <div className={w.Btn}>
              <Link to='/cart'><ShoppingCartIcon />{totalQuant() > 0 && <span className={w.Number}>{totalQuant()}</span>}
                </Link>
        </div>
    )
}

export default CartWidget;

    {/*return (
        <>
        <div className={w.Btn}>
        <Link to='/cart'>🛒{ totalQuant() > 0 && <span>{totalQuant()}</span>}</Link>
        </div>
            {/*<div className={w.Btn}>
              <Link to='/cart'><span>🛒({ totalQuant })</span></Link>
    </div>
        </>
    )};*/}

