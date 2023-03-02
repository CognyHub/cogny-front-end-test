import { addDoc } from 'firebase/firestore';
import productsCollection from '.';
import productsMock from './productsMock';

const addProductsToFirestore = async () => {
  await Promise.all([productsMock.map((product) => {
    return addDoc(productsCollection, product);
  })]);
};

const seeder = async () => {
  try {
    await addProductsToFirestore();
    console.log('Products added to Firestore successfully!');
  } catch (error) {
    console.log(error.message);
  }
};

seeder();
