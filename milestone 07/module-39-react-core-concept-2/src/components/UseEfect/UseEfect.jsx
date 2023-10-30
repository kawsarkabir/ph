import React, { useEffect, useState } from "react";
import Single from "../Single/Single";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(()=>{
   /*  const loadData = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json()
        setUser(data)
    }  */
 
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setUser(data))
 
  },[])
  
  return (
    <>
    <div className="container">
        <h1 className="mb-10 text-purple-500">User Data</h1>
    <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {
        user.map(us=> <Single key={us.index} us ={us}/>)
      }     
    </div>
    </div>
    </>
  );
};

export default Users;
