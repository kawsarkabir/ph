// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPgu1exT7LLB1thSoNCcxvdr_vuMPA4A",
  authDomain: "email-pass-auth-a25ee.firebaseapp.com",
  projectId: "email-pass-auth-a25ee",
  storageBucket: "email-pass-auth-a25ee.appspot.com",
  messagingSenderId: "783920686859",
  appId: "1:783920686859:web:5853217039a807ef4a640e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
