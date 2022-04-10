import React from 'react';
import ItemCount from './ItemCount';
import { bringItem } from '../utils/products';

const ItemDetail = ({item}) => {
    return (
            <div>
                <h2>{item.name}</h2>
                <h4>{item.price}</h4>
                <h3>holis</h3>
                <ItemCount />
            </div>
    )
};

export default ItemDetail;