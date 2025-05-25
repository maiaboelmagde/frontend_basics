import React from 'react';
import { useState } from 'react'


const Form = ({getInput}) => {

    const [person, setPerson] = useState({ name: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    const submitHandle=(e)=>{
        e.preventDefault();
        getInput(person);
        setPerson({name:'', age:''});
    }

    return (
        <div>
            <form className="container p-4 border rounded shadow-sm  bg-body-secondary" action="" onSubmit={submitHandle}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={person.name} onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" name="age" id="age" value={person.age} onChange={handleChange} required/>
                </div>

                <button type="submit" className="btn btn-dark">Save</button>
            </form>

        </div>
    );
}

export default Form;
