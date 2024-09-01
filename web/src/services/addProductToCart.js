import { collection, addDoc } from 'firebase/firestore';
import db from './firebaseConfig';

const addProductToCart = async (product) => {
  const data = await addDoc(collection(db, 'cart'), {
    ...product,
  });
  return data;
};

export default addProductToCart;
