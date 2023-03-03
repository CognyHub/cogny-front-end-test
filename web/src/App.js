import React, { useEffect } from 'react';
import { useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import './App.css';

import { initializeApp } from "firebase/app";
import Header from './componet/header';

const firebaseConfig = {

};

  const connection = initializeApp(firebaseConfig);
  const db = getFirestore(connection);
  const userCollectionRef = collection(db, 'product');

function App() {
   const [product, setProducts ] = useState([]);

   const getProductrs = async () => {
    const data = await getDocs(userCollectionRef);
    const parseData = data.docs.map((item) => ({...item.data(), id: item.id  }));
    setProducts(parseData);

  }
   useEffect(() =>{
    getProductrs()
   },[]);

  return (
    <>
      <Header/>
      <div className="App">
        { product.map((doc) => {
          return <div className="card">
            <img src={doc.img} alt="img" className="card-img"/>
            <p>{doc.description}</p>
            <span>R$ {doc.price}</span>
            <button>ADICIONAR AO CARRINHO</button>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
