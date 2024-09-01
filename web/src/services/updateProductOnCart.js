import { updateDoc, doc } from 'firebase/firestore';
import db from './firebaseConfig';

const updateProductOnCart = async (cartItem, changes) => {
  try {
    const docRef = doc(db, 'cart', cartItem.id);
    await updateDoc(docRef, { ...changes });
  } catch (error) {
    console.error('Erro ao atualizar documento: ', error);
  }
};

export default updateProductOnCart;
