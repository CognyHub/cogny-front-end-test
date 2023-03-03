import './App.css';
import { db } from './firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import AppRoute from './routes';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'shoes'));
    onSnapshot(q, (snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <AppRoute />
  );
}

export default App;
