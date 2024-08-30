import { updateDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const updateCartItem = async (cartItem, changes) => {
  try {
    const docRef = doc(db, 'cart', cartItem.id);
    await updateDoc(docRef, {...changes});

    console.log('Produto atualizado com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar documento: ', error);
  }
}

export default updateCartItem;
