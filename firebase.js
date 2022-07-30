// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqSPkAZcljjFue_y7GODY0To9jh0i9Krw",
  authDomain: "uber-clone-4a6d2.firebaseapp.com",
  projectId: "uber-clone-4a6d2",
  storageBucket: "uber-clone-4a6d2.appspot.com",
  messagingSenderId: "976398016857",
  appId: "1:976398016857:web:cad5025377c3e22ec3ac48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth }