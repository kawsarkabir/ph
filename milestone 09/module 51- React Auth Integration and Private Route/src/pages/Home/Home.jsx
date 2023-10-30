import { useContext } from "react";
import { AuthContext } from "../../userProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext)
  console.log(authInfo);
  return (
    <div>
      {<h1 className="text-2xl text-center">Home: {authInfo.name}</h1>}
 
    </div>
  );
};

export default Home;
