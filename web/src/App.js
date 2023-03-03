import './App.css';
import { db } from './firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'shoes'));
    onSnapshot(q, (snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div>Estou na página</div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <div>{item.description}</div>
            <img width="100" src={item.image} alt={item.description} />
            <p>{item.price}</p>
          </div>
            ))}
      </div>
    </div>
  );
}

export default App;
