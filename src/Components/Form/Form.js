import React, { useState, useEffect } from 'react';

import './index.css'
let database = []
const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(jsonResponse => {
            setApiData(jsonResponse)
      });
    },[])

    console.log(apiData)
    const handleSubmit = () => {
        console.log("Before", database)
        database.push({firstName, lastName, email, age, password})
        console.log("After", database)
    }

    
    return (
        <div>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/><br/>
            <input type="number" placeholder="Age" onChange={(e) => setAge(+e.target.value)}/><br/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='button-submit' onClick={handleSubmit}>Submit Form</button>
        </div>
    );
}

export default Form;
