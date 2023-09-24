import React, { useState, useEffect, useContext } from "react";
import './MainSection.css';
import { SearchText } from "../App";
import { render } from "@testing-library/react";


function MainSection() {
    const { searchText, setSearchText } = useContext(SearchText)
    const [price, setPrice] = useState(999)
    const InitPrice = async () => {
        if (searchText) {
            const res = await fetch('http://localhost:8000/view', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "item_name": searchText })
            });
            const Price = await res.json()
            console.log(Price)
            setPrice(Price.Price[0])
        }
        else {
            const res = await fetch('http://localhost:8000/view', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "item_name": "sofa" })
            });
            const Price = await res.json()
            console.log(Price)
            setPrice(Price.Price[0])
        }
    }
    useEffect(() => {
        InitPrice()
    }, [searchText])

    const data = [{"url":"./sofa.png", "name":"sofa", "price":"100$"}, {"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"},{"url":"./sofa.png", "name":"sofa", "price":"100$"}]
    return (
            <div className="mainsection-wrapper">
                {
                    data.map((item, key) => (
                        <div className="shop_item">
                        <img src={item.url} alt="can't find"></img>
                        <p>{item.name}</p>
                        <p>{price}</p>
                        </div>
                    ))
                }
            </div>
        );
}



export default MainSection;


