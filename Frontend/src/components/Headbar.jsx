import React from "react";
import './Headbar.css';
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Headbar() {
    return(
        <div className="headbar-wrapper">
            <h1>WELCOME TO MY WONDERFUL SHOP!</h1>
            <SearchBox />
            <div>
                <Link to='/signup' className="btn">SignUp</Link>
                <Link to='/login' className="btn">LogIn</Link> 
            </div>
           
        </div>
    );
}

export default Headbar;


