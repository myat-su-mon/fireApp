import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvNu1YD8SQ2rooOd4tvFDBQvcAu1ISeRc",
  authDomain: "firestreamapp-80fbd.firebaseapp.com",
  projectId: "firestreamapp-80fbd",
  storageBucket: "firestreamapp-80fbd.appspot.com",
  messagingSenderId: "827709586883",
  appId: "1:827709586883:web:279e67c11481135d535176",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
