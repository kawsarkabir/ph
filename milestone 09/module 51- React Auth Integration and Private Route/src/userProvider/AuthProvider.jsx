import {   createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({Children}) => {
  
    const authInfo = {name: 'hell hi pai pai'}



    return (
    <AuthContext.Provider value={authInfo}>
       {Children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
