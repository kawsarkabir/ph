const App = () => {
  const handleAddToUser = (e) => {
    e.preventDefault();
    const form = e.target
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added successfully !");
           form.reset()
        }
      });
  };
  return (
    <>
      <h1>simple CRUD with MongoDB</h1>
      <form onSubmit={handleAddToUser}>
        <input type="text" name="name" id="" placeholder="your name" /> <br />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
        /> <br /> <br />
        <input type="submit" value="addUser" />
      </form>
    </>
  );
};

export default App;
