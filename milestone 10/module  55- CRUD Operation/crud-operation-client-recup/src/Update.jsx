import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = {name, email};
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            alert('update successfully!!')
        }
      });
  };
  return (
    <div>
      <h1>update here: {user.name}</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={user.name} id="" /> <br />{" "}
        <br />
        <input type="email" name="email" defaultValue={user.email} id="" />{" "}
        <br /> <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Update;
