import React from 'react';
import { Link } from "react-router-dom"
import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    return (
       <nav className="navbar">
           <div className="nav-center">
               <Link to="/" className="nav-logo">
                       <h1>Dreamrest</h1>
               </Link>
               <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dream-builder"><FontAwesomeIcon className="plus-icon" icon={faPlusSquare}/></Link>
                    </li>       
               </ul>
           </div>
       </nav>
    );
}

export default Navbar;