import React from "react";
import SearchBar from "./SearchBar";
import './Nav.css'

export default function NavBar(){
    return(
        <div className = 'nav'>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}