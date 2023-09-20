import React from 'react';
import '../../App.css'

const Form = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" id="" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="submit" value="submit" /> <br />
            </form>
        </div>
    );
};

export default Form;