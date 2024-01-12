// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import productos from "../data/productos";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdFXMZ4txltznw7jjVTS8hguKt13a44m4",
  authDomain:"proyecto-coderreact-41cae.firebaseapp.com",
  projectId: "proyecto-coderreact-41cae",
  storageBucket: "proyecto-coderreact-41cae.appspot.com",
  messagingSenderId: "885923878010",
  appId: "1:885923878010:web:1e50620a74abc4812597c3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
