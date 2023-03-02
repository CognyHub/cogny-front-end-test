import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORANGE,
  messagingSenderId: process.env.REACT_APP_MESSA,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MENSURE
};

const app = initializeApp(firebaseConfig);

export function getProducts() {
  return new Promise(async(resolve, reject) => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, 'products');
      const data = await getDocs(collectionRef);
      resolve(data);
      return;
    } catch (error) {
      reject(new Error('Erro ao trazer produtos!'));
      return;
    }
  });
}
