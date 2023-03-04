import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAzQ6afC5bXqK79p6N5YcIiYFjeoAI1kDo",
  authDomain: "cogny-front-end-test-b0e85.firebaseapp.com",
  projectId: "cogny-front-end-test-b0e85",
  storageBucket: "cogny-front-end-test-b0e85.appspot.com",
  messagingSenderId: "922557791872",
  appId: "1:922557791872:web:4374a677f1e3985b1af065",
  measurementId: "G-F9TSS3DBR8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {

  const [shoesList, setShoesList] = useState('')

  const getShoes = async (db) => {
    const shoesCol = collection(db, 'shoes');
    const shoesSnapshot = await getDocs(shoesCol);
    const shoesList = shoesSnapshot.docs.map(doc => doc.data());
    setShoesList(shoesList)
    return shoesList;
  }
  
  useEffect(()=>{
    getShoes(db)
  }, [])

  return (
    <div>
     <h1>hi</h1>
     {shoesList && shoesList.map((item, index) => <li key={index}>{item.name}</li>)}

   </div>
  );
}

export default App;
