import { useState } from "react";
import app from "../../firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [userMan, setUserMan] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserMan(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("logout successfully");
        setUserMan(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Login Here...</h1>
      {userMan ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleGoogleSubmit}>Loging</button>
      )}
      {userMan && (
        <div>
          <p>{userMan?.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
