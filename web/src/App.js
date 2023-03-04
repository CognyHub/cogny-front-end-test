import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

const getShoes = async (db) => {
  const shoesCol = collection(db, 'shoes');
  const shoesSnapshot = await getDocs(shoesCol);
  const shoesList = shoesSnapshot.docs.map(doc => doc.data());
  return shoesList;
}

const 

function App() {
  return (
    <h1>{console.log(getShoes(db))}</h1>
  );
}

export default App;
