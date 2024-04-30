import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCSAcI62tGkbMWgU8NQdj9S91cBiwGjgf4",
    authDomain: "movemate-dddb8.firebaseapp.com",
    projectId: "movemate-dddb8",
    storageBucket: "movemate-dddb8.appspot.com",
    messagingSenderId: "742419098636",
    appId: "1:742419098636:web:40cf1ddc0d39b4fcda9229",
    measurementId: "G-94FNZ7DGZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
