// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { 
//          REACT_APP_API_KEY,
//          REACT_APP_API_KEY, 
//          REACT_APP_PROJECT_ID 
//         } from 'react-native-dotenv';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6w7cziH_fQPlINxfK7EpFPaduj_S5BhU",
  authDomain: "projetoloja-5a3c6.firebaseapp.com",
  projectId: "projetoloja-5a3c6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}