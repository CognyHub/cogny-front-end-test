import { getDocs } from 'firebase/firestore';
import productsCollection from '.';

const getProductsFromFirestore = async () => {
  const products = [];

  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return products;
};

export default getProductsFromFirestore;
