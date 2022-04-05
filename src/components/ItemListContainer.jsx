import * as React from 'react';
import ItemCount from './ItemCount/ItemCount';

export default function ItemListContainer () {
    return (
        <div>
        <ItemCount stock={10} />
        </div>
    )
}