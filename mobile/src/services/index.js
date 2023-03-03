import { collection, getDocs, getFirestore } from '@firebase/firestore';

import { app } from '../connection';

export function getProducts() {
  return new Promise((resolve, reject) => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, 'products');
      const data = getDocs(collectionRef);
      resolve(data);
      return;
    } catch (error) {
      reject(new Error('Erro ao trazer produtos!'));
      return;
    }
  });
}
