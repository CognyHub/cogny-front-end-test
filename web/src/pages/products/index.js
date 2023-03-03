import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

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
      <div>Página de Produtos</div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <img width="300" src={item.image} alt={item.description} />
            <div>{item.description}</div>
            <div>{item.price}</div>
            <button>ADICIONAR AO CARRINHO</button>
          </div>
        ))}
      </div>
    </div>
  )
}