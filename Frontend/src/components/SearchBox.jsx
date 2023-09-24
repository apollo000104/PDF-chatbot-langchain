import React from "react";
import { useContext } from "react";
import { SearchText } from "../App";


const SearchBox = () => {

    const {searchText, setSearchText} = useContext(SearchText)

    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }

    return(
        <div>
            <input type="text" onChange={handleSearch} />
        </div>
    )

}

export default SearchBox;