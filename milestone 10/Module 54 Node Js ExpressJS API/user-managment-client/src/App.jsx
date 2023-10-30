import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import SingleUser from "./SingleUser";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: "POST", 
      headers:{
        'content-type': 'aplication/json'
      }, 
      body: JSON.stringify(user)
    })
  };

  return (
    <>
      <h1>user management with server side</h1>
      <form onSubmit={handleUser} action="#">
        <input type="text" name="name" /> <br />
        <input type="email" name="email" placeholder="email" />
        <input type="submit" value="user add" />
      </form>
      {userData.map((singleUser) => (
        <SingleUser key={singleUser.id} singleUser={singleUser}></SingleUser>
      ))}
    </>
  );
}

export default App;
