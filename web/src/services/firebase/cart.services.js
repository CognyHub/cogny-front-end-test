import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
import firebaseApp from './app';
import { firebaseMapper } from './helpers/firebase.mapper';

const db = getFirestore(firebaseApp);

const cartCollection = collection(db, 'cart');

const getCart = async () => {
  const data = await getDocs(cartCollection);
  return firebaseMapper(data);
}

const addToCart = async (shoeId) => {
  const data = await addDoc(cartCollection, { shoeId });
  console.log(data);
}

export { getCart, addToCart };

