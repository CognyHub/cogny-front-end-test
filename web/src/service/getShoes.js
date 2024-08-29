import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const getShoes = async () => {
  const data = await getDocs(collection(db, "shoes"));
  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  return data;
};

export default getShoes;