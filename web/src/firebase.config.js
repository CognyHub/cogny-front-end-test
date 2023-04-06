// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA053lgLmeibp5ZBgngWqmOzITgWnNoLHA",
  authDomain: "cogny-test.firebaseapp.com",
  projectId: "cogny-test",
  storageBucket: "cogny-test.appspot.com",
  messagingSenderId: "461309614288",
  appId: "1:461309614288:web:1b24584542503212dba6d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);