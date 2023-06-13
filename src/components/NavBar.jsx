import React from "react";
import SearchBar from "./SearchBar"
import './Nav.css'

export default function NavBar({onSearch}) {
    return(
        <div className="nav" >
            <SearchBar onSearch={onSearch} />
        </div>
    )
}