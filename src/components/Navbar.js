import React from 'react';
import { Link } from "react-router-dom"
import '../css/Navbar.css'

function Navbar(props) {
    return (
       <nav className="navbar">
           <div className="nav-center">
               <Link to="/" className="nav-logo">
                       <h1>Dreamrest</h1>
               </Link>
               <ul className="nav-links">
                   <li>
                        <Link to="/">Home</Link>
                        <Link to="/dream-builder"><button className="add-card-button">&#x2b;</button></Link>
                   </li>
               </ul>
           </div>
       </nav>
    );
}

export default Navbar;