// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2s4WNIjk9ueJEOpMUHeppFLJa90N_V4",
  authDomain: "github-auth-recup.firebaseapp.com",
  projectId: "github-auth-recup",
  storageBucket: "github-auth-recup.appspot.com",
  messagingSenderId: "86934172155",
  appId: "1:86934172155:web:11dc78db38026e36515b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app