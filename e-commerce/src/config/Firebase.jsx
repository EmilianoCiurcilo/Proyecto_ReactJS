// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import productos from "../data/productos";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzTNbr2vTAiobMcK5UFWHYLHT_PECWwOQ",
    authDomain: "proyecto-react-7d159.firebaseapp.com",
    projectId: "proyecto-react-7d159",
    storageBucket: "proyecto-react-7d159.firebasestorage.app",
    messagingSenderId: "860786832011",
    appId: "1:860786832011:web:738ba5f9fb4298f8aeda8e"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)