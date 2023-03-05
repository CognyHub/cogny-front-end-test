// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0EyZY0qBgNqQqE83qnW3RGtiIdO4vySE',
  authDomain: 'cogny-front-end.firebaseapp.com',
  projectId: 'cogny-front-end',
  storageBucket: 'cogny-front-end.appspot.com',
  messagingSenderId: '419407130273',
  appId: '1:419407130273:web:dcca87c66038ab45378ae0',
  measurementId: 'G-976VL59S3B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
