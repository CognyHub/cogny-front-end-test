import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore,collection } from 'firebase/firestore'

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

const db = getFirestore(firebaseApp);
const produtosCollectionRef = collection(db,"produtos");

useEffect(()=>{
    const getProducts = async () => {
        const data = await getDocs(produtosCollectionRef);
        const MapData = data.docs.map((doc) => ({...doc.data(),id:doc.id}));
        console.log(MapData);
    }
    getProducts();
},[])

return (
    <div>
        <h1>pagina de listagem</h1>
    </div>
);
}

export default Home;