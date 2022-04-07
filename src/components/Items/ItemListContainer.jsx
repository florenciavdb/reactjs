import React, {useEffect, useState} from 'react';
import CostumFetch from '../utils/CostumFetch';
import products from '../utils/products';
import ItemList from './ItemList';

export default function ItemListContainer () {
    const [items, setItems]= useState ([]);

    useEffect(() => {
        CostumFetch(3000, products)
        .then(resault => setItems(resault))
        .catch(error => console.log(error));
    }, [items]
    )

    return (
        <div>
        <ItemList products={items} />
        </div>
    )
}