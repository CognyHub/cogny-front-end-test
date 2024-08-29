import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const getCartItems = async () => {
  const data = await getDocs(collection(db, "cart"));
  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  return data;
};

export default getCartItems;