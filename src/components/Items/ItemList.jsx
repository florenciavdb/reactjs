import React from 'react';
import Item from './Item';

function ItemList({products}) {
    return (
        products.map(p => (
            <Item
            key={p.id}
            image={p.image}
            name={p.name}
            price={p.price} />
        ))
    )
}

export default ItemList;