import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORANGE,
  messagingSenderId: process.env.REACT_APP_MESSA,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MENSURE
};

export const app = initializeApp(firebaseConfig);
