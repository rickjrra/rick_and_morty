import React from "react";
import SearchBar from "./SearchBar"
import './Nav.css'
import {Link} from 'react-router-dom'

export default function NavBar({onSearch, logOut}) {
  
    return(
        <div className="nav" >
            <Link to='/home'>
            <button>Home</button>
            </Link>
            <Link to='/about'>
            <button>About</button>
            </Link>
            <button onClick={logOut}>log out</button>
    
            <SearchBar onSearch={onSearch} />
        </div>
    )
}