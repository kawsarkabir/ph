// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC56UcIbzVq7Cs92J26VY205Q2R9hNCVQs",
  authDomain: "auth-moha-milon-a8e4c.firebaseapp.com",
  projectId: "auth-moha-milon-a8e4c",
  storageBucket: "auth-moha-milon-a8e4c.appspot.com",
  messagingSenderId: "322875859154",
  appId: "1:322875859154:web:0e3bd87e056cc246d74d0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
