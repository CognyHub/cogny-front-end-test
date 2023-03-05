import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import Card from '../componentes/Card';
import { firebaseConfig } from '../utils/firebaseConfig';
import Header from '../componentes/Header';
import { BodyStyle } from '../styles';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [shoesList, setShoesList] = useState('');

  const getShoes = async (firebaseDb) => {
    const shoesCol = collection(firebaseDb, 'shoes');
    const shoesSnapshot = await getDocs(shoesCol);
    const dataShoes = shoesSnapshot.docs.map((doc) => doc.data());
    setShoesList(dataShoes);
    return shoesList;
  };

  useEffect(() => {
    getShoes(db);
  }, []);

  return (
    <BodyStyle>
      <Header />
      <div className="divContainer">

        {shoesList && shoesList.map((item) => (
          <Card
            key={item.url}
            id={item.id}
            price={item.price}
            name={item.name}
            url={item.url}
            description={item.description}
          />
        ))}
      </div>
    </BodyStyle>
  );
}

export default App;
