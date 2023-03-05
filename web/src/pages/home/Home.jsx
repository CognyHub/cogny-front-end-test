import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../helpers/useLocalStorage';
import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore,collection } from 'firebase/firestore'
import Card from '../../components/card/Card';
import NavBar from '../../components/navbar/NavBar';
import "./home.css"

const apiKey = process.env.REACT_APP_API_KEY;
const apiAuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
const apiProjectId = process.env.REACT_APP_PROJECT_ID;
const apiStorageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

const firebaseApp = initializeApp ({
  apiKey: apiKey,
  authDomain: apiAuthDomain,
  projectId: apiProjectId,
  storageBucket: apiStorageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
}) ;

function Home() {
const [products, setProducts] = useState([]);
let [itens, setItens] = useLocalStorage("itens", []);


const db = getFirestore(firebaseApp);
const produtosCollectionRef = collection(db,"produtos");

useEffect(()=>{
    const getProducts = async () => {
        const data = await getDocs(produtosCollectionRef);
        const MapData = data.docs.map((doc) => ({...doc.data(),id:doc.id}));
        setProducts(MapData);
    }
    getProducts();
    
},[])
if (products === []) {
    return (
        <h1>Carregando</h1>
    )
}
return (
    <>
        <NavBar qtdCart={0} />
    <div className='main-home'>
        <ul className='container-cards'> 
         {products.map((product) => {
             return ( <Card id={product.id} Cart={itens} setCart={setItens} key={product.id} url={product.url} name={product.nome} preco={product.preco}  />)
            })}
        </ul>
           
    </div>
    </>

);
}

export default Home;