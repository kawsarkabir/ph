import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const User = () => {
  const user = useLoaderData();
 
  return (
    <div>
      <h1 className="text-center mt-5 text-4xl">here is our user </h1>
      <div className="grid grid-cols-3 gap-5 mt-5 px-5">
        {
            user.map(singleUser => <SingleUser key={singleUser.id} singleUser={singleUser} />)
        }
      </div>
    </div>
  );
};

export default User;
