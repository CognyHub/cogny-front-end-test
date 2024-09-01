import { deleteDoc, doc } from 'firebase/firestore';
import db from './firebaseConfig';

const removeProductFromCart = async (cartItem) => {
  try {
    const docRef = doc(db, 'cart', cartItem.id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Erro ao remover item do carrinho: ', error);
  }
};

export default removeProductFromCart;
