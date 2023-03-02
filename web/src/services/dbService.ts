import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from './firebase';

import { Product } from '../types/product';

export const getProductById = async (productId: string) => {
  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);
  const productWithId = { id: productSnap.id, ...productSnap.data() };
  return productWithId as Product;
};

export const getProducts = async () => {
  const productsRef = collection(db, 'products');
  const productsSnap = await getDocs(productsRef);
  const productsWithId = productsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return productsWithId as Product[];
};
