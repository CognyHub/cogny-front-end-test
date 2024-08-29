import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import getCartItems from './getCartProducts';

const cleanCart = async () => {
  try {
    const cartItems = await getCartItems(); 

    const deletePromises = cartItems.docs.map((document) =>
      deleteDoc(doc(db, 'cart', document.id))
    );

    await Promise.all(deletePromises);

    console.log('Todos documentos foram deletados');
  } catch (error) {
    console.error('Erro ao deletar os documentos: ', error);
  }
}

export default cleanCart;
