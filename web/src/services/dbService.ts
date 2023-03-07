import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  updateDoc,
} from 'firebase/firestore';
import { ProductCart } from './../types/product';

import { db } from './firebase';

import { Product } from '../types/product';
import { Stock } from '../types/stock';

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

type ChangeStockQuantityParams = {
  stockId: Stock['id'];
  quantity: ProductCart['quantity'];
};

export const changeStockQuantity = async ({
  stockId,
  quantity,
}: ChangeStockQuantityParams) => {
  const stockRef = doc(db, 'stock', stockId);
  updateDoc(stockRef, {
    quantity: increment(-quantity),
  });
};
