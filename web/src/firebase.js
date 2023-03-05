import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjrvwASUjcPiW-4oHOkRcn0l6lIMDZzo0',
  authDomain: 'cognyshoes-3832d.firebaseapp.com',
  projectId: 'cognyshoes-3832d',
  storageBucket: 'cognyshoes-3832d.appspot.com',
  messagingSenderId: '665896071010',
  appId: '1:665896071010:web:2545bb390c67ae49bbc63b',
  measurementId: 'G-JGSY15HWQW'
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getProducts() {
  const productsCollection = collection(db, 'products');
  const productsDocs = await getDocs(productsCollection);
  const productsList = productsDocs.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  console.log(productsList);
  return productsList;
}

export { getProducts, getFirestore };
