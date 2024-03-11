import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  
    apiKey: "AIzaSyBv9PvXj3xsd6gmDpIyRU2pM3zduIxKXOE",
    authDomain: "codernext-app-b43fb.firebaseapp.com",
    projectId: "codernext-app-b43fb",
    storageBucket: "codernext-app-b43fb.appspot.com",
    messagingSenderId: "516632641361",
    appId: "1:516632641361:web:0d4d3b734a60060a569d70"
  };





// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
