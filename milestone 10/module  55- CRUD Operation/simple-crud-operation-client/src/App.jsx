 

const App = () => {
  const handleAddUser=(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST', 
      headers:{
        'content-type':'application/json'
      }, 
      body: JSON.stringify(user)
    })
  }
  return (
    <div>
      <h1>crud coming</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="name" /> <br /> <br />
        <input type="email" name="email" id="" placeholder="email" /> <br /> <br />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
};

export default App;