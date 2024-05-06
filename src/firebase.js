// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUrd4Hj3ZKlgmUU5OLFcPFRQGFYEo8spY",
  authDomain: "login-register-a1a32.firebaseapp.com",
  projectId: "login-register-a1a32",
  storageBucket: "login-register-a1a32.appspot.com",
  messagingSenderId: "189522798984",
  appId: "1:189522798984:web:dc5ebfb7af95d5b436323d",
  measurementId: "G-QWRWVR5XLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
