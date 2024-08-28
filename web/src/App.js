import './App.css';
import { db } from './service/firebaseConfig';
import getShoes from './service/getShoes';

import { collection, getDocs } from "firebase/firestore"; 
const handleClick = async () => {
  const querySnapshot = await getDocs(collection(db, "shoes"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

}

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <button onClick={getShoes}>
        get shoes
      </button>
    </div>
  );
};

export default App;
