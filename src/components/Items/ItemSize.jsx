import React from 'react';
import s from './css/ItemSize.module.css';
import { useState, useContext} from 'react';
import { CartContext } from '../Cart/CartContext';

const ItemSize = ({sizes}) => {

    return (
        <>
        <div className={s.SizesBtn}>

           {sizes && sizes.map(item => (
               <button className={s.All}>{item}</button>
           ))}
        </div>
        </>
    )
}

export default ItemSize;
