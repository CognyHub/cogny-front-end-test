import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getCartItems = async () => {
  const data = await getDocs(collection(db, 'cart'));
  return data;
};

export default getCartItems;
