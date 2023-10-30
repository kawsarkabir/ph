// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZPz46GNpHAkU8wYzwqmbaX-qrJZN1hd8",
  authDomain: "auth-moha-milon-recup.firebaseapp.com",
  projectId: "auth-moha-milon-recup",
  storageBucket: "auth-moha-milon-recup.appspot.com",
  messagingSenderId: "504781728936",
  appId: "1:504781728936:web:e2e23d60563ae27e74e69d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth