// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3TI5BzMlPr9a5VM7JxZGyVjGN31HISmc",
  authDomain: "simple-firebase-02.firebaseapp.com",
  projectId: "simple-firebase-02",
  storageBucket: "simple-firebase-02.appspot.com",
  messagingSenderId: "306309709005",
  appId: "1:306309709005:web:b6a76eb94a168ffff87d84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
