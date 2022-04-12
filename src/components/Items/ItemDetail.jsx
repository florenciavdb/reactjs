import React from 'react';
import ItemCount from './ItemCount';
import d from './ItemDetail.module.css';
import ItemSize from './ItemSize';

const ItemDetail = ({product}) => {
    return (
            <div className={d.Container}>
                <img src={product.image} className={d.Image} />
                <div className={d.Content}>
                    <div className= {d.Name}>{product.name}</div>
                    <div className={d.Category}>{product.category}</div>
                    <div className= {d.Price}>{product.price}</div>
                    <div className={d.Description}>{product.description}</div>
                    <ItemSize size={product.size}/>
                    <ItemCount stock={product.stock}/>
                    
                </div>
            </div>
    )
}

export default ItemDetail;