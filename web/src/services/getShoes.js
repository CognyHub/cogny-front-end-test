import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const getShoes = async () => {
  const data = await getDocs(collection(db, "shoes"));
  return data;
};

export default getShoes;