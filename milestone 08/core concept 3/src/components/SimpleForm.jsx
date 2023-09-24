import React from 'react';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
    }
    return ( 
        <div className='bg-blue-400 p-32 w-1/2 mx-auto mt-32 text-center'>
            <form action="#" onSubmit={handleSubmit}>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='name' /> <br /> <br />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='email' /> <br /> <br />
            <input type="submit" value="Submit"  className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default SimpleForm;