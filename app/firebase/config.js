import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" 
import { getAuth, GoogleAuthProvider } from "firebase/auth"
/*
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyBv9PvXj3xsd6gmDpIyRU2pM3zduIxKXOE",
  authDomain: "codernext-app-b43fb.firebaseapp.com",
  projectId: "codernext-app-b43fb",
  storageBucket: "codernext-app-b43fb.appspot.com",
  messagingSenderId: "516632641361",
  appId: "1:516632641361:web:0d4d3b734a60060a569d70"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


/*
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBv9PvXj3xsd6gmDpIyRU2pM3zduIxKXOE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=codernext-app-b43fb.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=codernext-app-b43fb
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=codernext-app-b43fb.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=516632641361
NEXT_PUBLIC_FIREBASE_APP_ID=1:516632641361:web:0d4d3b734a60060a569d70
*/