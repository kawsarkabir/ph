import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h1>users: {users.length}</h1>
            {
                users.map(user=> <div key={user._id}>

                    <h1>name: {user.name}</h1>
                </div>)
            }
        </div>
    );
};

export default Users;