import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from './app';
import { firebaseMapper } from './helpers/firebase.mapper';

const db = getFirestore(firebaseApp);

const shoesCollection = collection(db, 'shoes');

const getShoes = async () => {
  const data = await getDocs(shoesCollection);
  return firebaseMapper(data);
}

export { getShoes };
