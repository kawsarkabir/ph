import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData()
    const handleDelete=_id=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            {
                users?.map(user=> <div key={user._id}>
                    <h3>name:{user.name}  email: {user.email}
                    id:{user._id}
                     <button
                      onClick={()=>handleDelete(user._id)}
                     >X</button>
                    </h3>
             
                </div>)
            }
        </div>
    );
};

export default Users;