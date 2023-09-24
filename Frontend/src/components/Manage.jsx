import React, { useState } from "react";
import './Manage.css';

function Manage() {

    const [price, setPrice]=useState(0)
    const [url, setUrl]=useState("")
    const [item_name, setItem_name]=useState("")

    const handleUrl = (event) =>{
        setUrl(event.target.value);
    }
    const handleItem_name = (event) =>{
        setItem_name(event.target.value);
    }
    const handlePrice=(event)=>{
        setPrice(event.target.value);
    }

    const handleSend=async () => {
        const res= await fetch("http://localhost:8000/about",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({url,item_name,price})
        });
        const response=res.json()
        console.log(response)
    }

    return (
        <div className="manage-wrapper">
            <img src="./sofa.png" alt="can't find"></img>
            {/* <input type="text">This is my photo</input>
            <p>Price <input type="text" /></p> */}
            <div className="price">
                <p>Price : </p>
                <input className='manage_price' type="text" placeholder="Url" onChange={handleUrl} />
                <input className='manage_price' type="text" placeholder="Name" onChange={handleItem_name} />
                <input className='manage_price' type="text" placeholder="Price" onChange={handlePrice} />
            </div>
            <button className="save-button" onClick={handleSend}>Update</button>
        </div>
    );
}
export default Manage;

