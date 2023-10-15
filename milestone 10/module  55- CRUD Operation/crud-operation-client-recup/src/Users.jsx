import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const initialyUsers = useLoaderData();
  const [users, setUsers] = useState(initialyUsers);
  const handleDelete = (_id) => {
    console.log("delete this items", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((user) => user._id !== _id);
        setUsers(remaining);
      });
  };
  return (
    <div>
      <h1>users coming</h1>
      {users?.map((user) => (
        <div key={user._id}>
          <h3>
            name: {user.name} {user._id}
            <Link to={`/update/${user._id}`}>
            <button>update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
