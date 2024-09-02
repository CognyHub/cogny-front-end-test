import { collection, addDoc } from 'firebase/firestore';
import db from './firebaseConfig';

const createOrder = async (order) => {
  const data = await addDoc(collection(db, 'orders'), {
    ...order,
  });
  return data;
};

export default createOrder;
