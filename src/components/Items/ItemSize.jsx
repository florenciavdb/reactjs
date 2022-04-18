import React, { useState } from 'react';
import s from './css/ItemSize.module.css';

const ItemSize = ({size}) => {
    return (
        <div className={s.SizesBtn}>
            <button className={s.All}>XS</button>
            <button className={s.All}>S</button>
            <button className={s.All}>M</button>
            <button className={s.All}>L</button>
            <button className={s.All}>XL</button>
            <button className={s.All}>XXL</button>
        </div>
    )
}

export default ItemSize;
