import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const UserContext = createContext(null);
const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);



  const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password )
  }
  const authInfo = { createUser };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UserProvider;
