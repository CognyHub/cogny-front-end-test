import { getFirestore, getDocs, collection, getDoc, doc } from 'firebase/firestore';
import firebaseApp from './app';
import { firebaseMapper } from './helpers/firebase.mapper';

const db = getFirestore(firebaseApp);

const shoesCollection = collection(db, 'shoes');

const getShoes = async () => {
  const data = await getDocs(shoesCollection);
  return firebaseMapper(data);
}

const getShoeById = async (id) => {
  const docRef = doc(shoesCollection, id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data()
}

const getShoesByIds = async (ids) => {
  const shoes = await Promise.all(ids.map((id) => getShoeById(id)));
  return shoes;
}

export { getShoes, getShoesByIds };
