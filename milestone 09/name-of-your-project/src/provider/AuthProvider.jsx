import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// step 1: create context and export it
export const AuthContext = createContext(null);

// ste 5: children name props nite hobe
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("spy giri kortase", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    return signOut(auth)
  }

  const authInfo = { user, createUser, signInUser, logOut };
  return (
    //step 2: exiting provider added
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};


AuthProvider.propTypes={
    children: PropTypes.node,
}
export default AuthProvider;
