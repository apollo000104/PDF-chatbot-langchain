import React from "react";
// import MainSection from "../components/MainSection
import Headbar from "../components/Headbar";
import Footbar from "../components/Footbar";
import './Home.css'
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        <Headbar />
        <Link to='view' className="shop-link">Go to the SHop</Link>
        <Link to='chatroom' className="chatroom-link">Chat Here</Link>
        {/* <h1>This is My Shop</h1> */}
        <Footbar />
        </>
    )
}

export default Home;