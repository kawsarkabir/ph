const SingleUser = ({ singleUser }) => {
  console.log(singleUser);
  return (
    <div>
      <h3>Name: {singleUser.username}</h3>
      <p>Email: {singleUser.email}</p>
    </div>
  );
};

export default SingleUser;
