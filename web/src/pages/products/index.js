import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import ProductCard from '../../components/productCard';

export default function Products() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'shoes'));
    onSnapshot(q, (snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div>
      <div><Navbar/></div>
      <ProductCard data={data} />
    </div>
  )
}