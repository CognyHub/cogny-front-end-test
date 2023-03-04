// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzQ6afC5bXqK79p6N5YcIiYFjeoAI1kDo",
  authDomain: "cogny-front-end-test-b0e85.firebaseapp.com",
  projectId: "cogny-front-end-test-b0e85",
  storageBucket: "cogny-front-end-test-b0e85.appspot.com",
  messagingSenderId: "922557791872",
  appId: "1:922557791872:web:4374a677f1e3985b1af065",
  measurementId: "G-F9TSS3DBR8"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

export default firebase;