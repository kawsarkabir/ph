import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const [person, setPerson] = useState(null);
//   const [gitUser, setGitUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setPerson(user);
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setPerson(null);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setPerson(user)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-14 text-center">
      {person ? (
        <button
          className="btn bg-red-300 text-white rounded-lg py-4 px-12 mr-3"
          onClick={handleGoogleSignOut}
        >
          sign out
        </button>
      ) : (
        <div>
          <button
            className="btn bg-red-300 text-white rounded-lg py-4 px-12 mr-3"
            onClick={handleGoogleSignIn}
          >
            google signIn
          </button>
          <button
            className="btn bg-red-300 text-white rounded-lg py-4 px-12 mr-3"
            onClick={handleGithubSignIn}
          >
            github signIn
          </button>
        </div>
      )}

      {person && (
        <div>
          <h1>Name:{person?.displayName}</h1>
          <h1>Name:{person?.email}</h1>
          <img src={person?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
