import { useState } from "react";
import "./App.css";
import app from "./firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

function App() {
  const [googleUser, setGoogleUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setGoogleUser(user)
      })
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        setGoogleUser(null);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  const handlegithubLogin = ()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user = result.user
      console.log(user);
      setGoogleUser(user)
    })
    .catch(error=> console.log(error))
  }
  return (
    <>
      {googleUser ? (
        <>
          <button onClick={handleLogout}>SignOut</button>
        </>
      ) : (
        <>
        <button onClick={handleGoogleLogin}>login with google</button>
        <button onClick={handlegithubLogin}>login with github</button>
        </>
      )}
      {googleUser && (
        <div>
          <h1>Name: {googleUser?.displayName}</h1>
        </div>
      )}
    </>
  );
}

export default App;
