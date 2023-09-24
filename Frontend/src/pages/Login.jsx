import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footbar from "../components/Footbar";
import './login.css'



function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")    

    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const handlePassword = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleSend = async () => {
        const res = await fetch('http://localhost:8000/login', 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password })
        });
        console.log(res)
        const response = await res.json()
        // alert(response.message)
        if (response.message == "Success") {
            window.location.href = "/about"
        }
        else {
            alert(response.message)
        }
    }

    return (
        <div className="login-container">
            <div>
                <div className="container">
                    <label for='login'>User name or email address </label>
                    <input type="text" placeholder="Enter your name" name='login' id='login_field' onChange={handleName} />
                    <label for='psw'>Password</label>
                    <input type="password" placeholder="Enter password" name='psw' id="password" onChange={handlePassword} />
                    <button className="login button" onClick={handleSend}>Login</button>
                </div>
            </div>
            <div className="login">
                <p className="login text">New here?</p>
                <Link to='/signup'>Create Account</Link>
            </div>
            <Footbar name={name}/>

        </div>
    )
}

export default Login;