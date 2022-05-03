import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      //console.log(id);
      const db = getFirestore();
  
      let productsRef;
      if (!id) {
        productsRef = collection(db, 'products');
      } else {
        productsRef = query(collection(db, 'products'), where('category', '==', id));
      }
  
      getDocs(productsRef).then((res) => {
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      });
    }, [id]);
  
    return (
      <>
        <ItemList products={products} />
      </>
    );
  }
