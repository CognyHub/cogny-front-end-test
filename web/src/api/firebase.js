// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADOqxApUGar0uIR3gEVZEPNGdFJbRiOaI",
    authDomain: "cognyshoes-api.firebaseapp.com",
    projectId: "cognyshoes-api",
    storageBucket: "cognyshoes-api.appspot.com",
    messagingSenderId: "71414162616",
    appId: "1:71414162616:web:2ea1049b8fb4c2ec57c04d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};