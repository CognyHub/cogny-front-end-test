import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../services/db/fireApp';

const db = getFirestore(firebaseApp);
const productCollectionRef = collection(db, 'products');

export const START_FETCH_PRODUCTS = 'START_FETCH_PRODUCTS';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ITEM_EXISTS_ON_CART = 'ITEM_EXISTS_ON_CART';
export const CLEAN_CART = 'CLEAN_CART';

export function requestStarted() {
  return { type: START_FETCH_PRODUCTS };
}

export function requestSuccessful(data) {
  return {
    type: FETCH_SUCCESSFUL,
    payload: data,
  };
}

export function requestFail(error) {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    const fetchData = await getDocs(productCollectionRef);
    const data = fetchData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(requestStarted());
    dispatch(requestSuccessful(data));
    return data;
  };
}

export function addCartCreator(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function cartCleaner() {
  return {
    type: CLEAN_CART,
  };
}

export function errorCreator(message) {
  return {
    type: ITEM_EXISTS_ON_CART,
    payload: message,
  };
}
