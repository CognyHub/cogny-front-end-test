import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const removeCartItem = async (cartItem) => {
  try {
    const docRef = doc(db, 'cart', cartItem.id);
    await deleteDoc(docRef)

    console.log('Produto removido do carrinho com sucesso');
  } catch (error) {
    console.error('Erro ao remover item do carrinho: ', error);
  }
}

export default removeCartItem;
