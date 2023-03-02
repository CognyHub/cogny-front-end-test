// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.REACT_APP_API_KEY;
const apiAuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
const apiProjectId = process.env.REACT_APP_PROJECT_ID;
const apiStorageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: apiAuthDomain,
  projectId: apiProjectId,
  storageBucket: apiStorageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);