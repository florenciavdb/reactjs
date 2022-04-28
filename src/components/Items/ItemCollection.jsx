import React, { useEffect, useState} from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

export default function ItemCollection () {

    const [products, setProducts ] = useState({});

    useEffect (() => {
        
        const db = getFirestore();

        const productsRef = collection(db, 'products');

        getDocs(productsRef).then((res) => {
            /*let products = [...res.docs];

            products = products.map((item) => ({ id: item.id, ...item.data() }));

            setProductos(productos); */

            setProducts(res.docs.map(item => ({id: item.id, ...item.data ()})));
        });
    }, []);

    useEffect(() => {
        console.log(products);
      }, [products]);

      return <>{products.length ? <div>{JSON.stringify(products)}</div> : 'Loading...'}</>;
    }
