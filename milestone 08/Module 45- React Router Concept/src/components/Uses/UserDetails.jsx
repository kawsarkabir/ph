import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-3xl mt-5">Users Detaisl Here</h1>
      <div className="bg-purple-300 p-4 mt-5 text-center rounded-lg w-80 mx-auto">
        <h1>Name: {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
        <h2>Phone: {userDetails.phone}</h2>
      </div>
    </div>
  );
};

export default UserDetails;
