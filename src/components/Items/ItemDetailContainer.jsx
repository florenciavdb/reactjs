import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { bringItem } from '../utils/products';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState ({});

    useEffect (() => {
        bringItem()
            .then((res) => {
                setItem(res)
        })
    }, []);

    return (
        <>
        <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer;

