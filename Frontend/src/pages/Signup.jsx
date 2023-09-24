import React, { useState } from "react";
import "./signup.css"

function Signup() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password_confrim, setPassword_confirm] = useState("")

    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const handlePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    const handlePasswordConfirm = (event) => {
        console.log(event.target.value);
        setPassword_confirm(event.target.value);
    }

    const handleSend = async () => {
        const res = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ name, password })
        });
        console.log(res)
        const response = await res.json()
        if (response.message == "Success") {
            alert("Welcome to join us!")
            window.location.href = "/login"
        }
        else {
            alert(response.message)
        }
    }

    return (
        <div className="signup-wrapper">
            <label for='signup_field'>User Name</label>
            <input className="signup" type="text" id='signup_field' onChange={handleName} />
            <label>Password</label>
            <input className="signup" type='password' id='password_field' onChange={handlePassword} />
            <label>Password Confirm</label>
            <input className="signup" type="password" id="password_field" onChange={handlePasswordConfirm} />
            <button className="signup-button" onClick={handleSend}>SignUp</button>
        </div>
    )
}
export default Signup;