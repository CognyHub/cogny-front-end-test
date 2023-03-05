import React, { useEffect, useContext} from 'react';
import { useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import '../App.css';
import { initializeApp } from "firebase/app";
import Header from '../components/header';
import CartContext from '../context/cartContext';

const firebaseConfig = {
  apiKey: "sua credenciais firebase",
  authDomain: "sua credenciais firebase",
  projectId: "sua credenciais firebase",
};

const connection = initializeApp(firebaseConfig);
const db = getFirestore(connection);
const userCollectionRef = collection(db, 'product');

function Home() {
   const [product, setProducts ] = useState([]);
   const {cartProduct, setCartProduct} = useContext(CartContext)

  const addCart = (e) => {
    const element = e.target.parentNode;
    const productChosen = {
      img: element.children[0].src,
      description:  element.children[1].textContent,
      price: element.children[2].textContent.split(" "),
      qtd: 1
    }

    const result = cartProduct.find((item)=> item.description === productChosen.description)
    if (result){
      console.log("item ja adicionado")
    }else{
      setCartProduct([...cartProduct, productChosen]);
    }
  }

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
      <Header itemCart={cartProduct.length}/>
      <div className="App">
        { product.map((doc) => {
          return <div className="card">
            <img src={doc.img} alt="img" className="card-img"/>
            <p>{doc.description}</p>
            <span>R$ {doc.price}</span>
            <button onClick={(e)=> addCart(e)}>ADICIONAR AO CARRINHO</button>
          </div>
        })}
      </div>
    </>
  );
}

export default Home;
