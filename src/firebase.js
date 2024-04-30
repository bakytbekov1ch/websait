// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBERr6SYAWoEmRtq67A2IUadrYDpfEafJw",
  authDomain: "firstproject-406c9.firebaseapp.com",
  projectId: "firstproject-406c9",
  storageBucket: "firstproject-406c9.appspot.com",
  messagingSenderId: "31424052132",
  appId: "1:31424052132:web:98b286719ab2678a41df31",
  measurementId: "G-QP4XDFGXPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)