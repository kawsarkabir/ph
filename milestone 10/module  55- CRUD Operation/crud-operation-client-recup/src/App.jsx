const App = () => {
  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
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
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>simple crud operation rercup</h1>
      <form onSubmit={handleUser} action="#">
        <input type="text" name="name" id="" /> <br /> <br />
        <input type="email" name="email" id="" /> <br />
        <br />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
};

export default App;
