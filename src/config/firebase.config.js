// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-IozmPGR1t5RHIsvfAjKZnnKfc7JZPw",
  authDomain: "gallery-3c17b.firebaseapp.com",
  projectId: "gallery-3c17b",
  storageBucket: "gallery-3c17b.appspot.com",
  messagingSenderId: "498935464951",
  appId: "1:498935464951:web:3a6695a686e7c8f002e4f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
