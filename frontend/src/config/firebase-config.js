// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUvp9szhmJqqJ6Qj5CWN2R0_ac3_tZL0",
  authDomain: "auth-z.firebaseapp.com",
  projectId: "auth-z",
  storageBucket: "auth-z.appspot.com",
  messagingSenderId: "976938470232",
  appId: "1:976938470232:web:0cf07f2129cd4bd590f32d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);