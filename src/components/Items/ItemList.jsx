import React from 'react';
import Item from './Item';
import l from './ItemList.module.css';

function ItemList({products}) {
    return (
        <div className={l.Container}>
        {products.map(p => (   
            <Item
            key={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
            />
        ))}  
        </div>
    )
}

export default ItemList;