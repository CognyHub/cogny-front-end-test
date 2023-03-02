import { initializeApp } from "firebase/app";
import { getFirestone } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7HHYJjBqSm-Vt1i6D1j4s0Wq3AD2IkUs",
  authDomain: "cognyshoes-f9be0.firebaseapp.com",
  projectId: "cognyshoes-f9be0",
  storageBucket: "cognyshoes-f9be0.appspot.com",
  messagingSenderId: "947377288172",
  appId: "1:947377288172:web:b8a74e4f136d740aa9c6c9",
  measurementId: "G-9PLBG4FXYD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestone(app);

export { db }