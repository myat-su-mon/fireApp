import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8AGqBvhIsccAZZUuM6EjU8X4Ruvy6D1A",
  authDomain: "fir-auth-e2369.firebaseapp.com",
  projectId: "fir-auth-e2369",
  storageBucket: "fir-auth-e2369.appspot.com",
  messagingSenderId: "239934860981",
  appId: "1:239934860981:web:31f2154c9eefad102c18fc",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
