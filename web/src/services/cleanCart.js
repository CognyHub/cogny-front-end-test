import { writeBatch, doc } from 'firebase/firestore';
import db from './firebaseConfig';
import getCartItems from './getCartProducts';

const cleanCart = async () => {
  try {
    const cartItems = await getCartItems();
    const batch = writeBatch(db);

    cartItems.docs.forEach((document) => {
      const docRef = doc(db, 'cart', document.id);
      batch.delete(docRef);
    });

    await batch.commit();
  } catch (error) {
    console.error('Erro ao deletar os documentos: ', error);
  }
};

export default cleanCart;
