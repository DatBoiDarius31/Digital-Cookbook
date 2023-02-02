// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFrQiRIx5URvd-4UjcFWG1Tx618S64PqA",
  authDomain: "digital-cookbook-bb18f.firebaseapp.com",
  projectId: "digital-cookbook-bb18f",
  storageBucket: "digital-cookbook-bb18f.appspot.com",
  messagingSenderId: "924061486980",
  appId: "1:924061486980:web:59e978a3f42900c993d7d1",
  measurementId: "G-6B75MHJ7YM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
