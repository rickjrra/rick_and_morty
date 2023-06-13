import React from "react";
import SearchBar from "./SearchBar"
import './Nav.css'

export default function NavBar({onSearch}) {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}