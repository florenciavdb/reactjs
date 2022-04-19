import React, { useState } from 'react';
import s from './css/ItemSize.module.css';


const ItemSize = ({sizes}) => {

    return (
        <div className={s.SizesBtn}>

           {sizes && sizes.map(item => (
               <button className={s.All}>{item}</button>
           ))}
        </div>
    )
}

export default ItemSize;