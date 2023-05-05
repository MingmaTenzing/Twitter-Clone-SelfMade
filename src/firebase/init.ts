// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwDFk8RWPf4esBvZkE9QKiScIf8dKMYug",
  authDomain: "twitter-clone-5c298.firebaseapp.com",
  projectId: "twitter-clone-5c298",
  storageBucket: "twitter-clone-5c298.appspot.com",
  messagingSenderId: "63618566658",
  appId: "1:63618566658:web:2d864ff059acb1131c751b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
