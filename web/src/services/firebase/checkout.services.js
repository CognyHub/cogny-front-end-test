import { getFirestore, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import firebaseApp from './app';

const db = getFirestore(firebaseApp);

const checkoutCollection = collection(db, 'checkout');

const finishOrder = async (shoesIds) => {
  const docRef = doc(checkoutCollection, "1");
  const docSnapshot = await getDoc(docRef);

  let items = docSnapshot.data().items || [];
  items = shoesIds;

  await updateDoc(docRef, { items })
}

export { finishOrder };

