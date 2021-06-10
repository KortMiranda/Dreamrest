import React, { useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom"
import '../css/Navbar.css'

function Navbar() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
      }
    }, []);
    return (
       <nav className="navbar">
           <div className="nav-center">
               <Link to="/" className="nav-logo">
                       <h1>Dreamrest</h1>
               </Link>
               <ul className="nav-links">
                   {isAuth === true ? (
                       <Fragment>
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/dream-builder"><button className="add-card-button">&#x2b;</button></Link>
                        </li>
                        <li>
                            <Link to="/my-cards/:id">My Profile</Link>
                        </li>
                        <li>
                            <Link to='/logout'>Logout</Link>
                        </li>
                       </Fragment>
                   ) : (
                       <Fragment>
                           {' '}
                           <li>
                                <Link to='/login'>Login</Link>
                           </li>
                           <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                       </Fragment>
                   )}   
               </ul>
           </div>
       </nav>
    );
}

export default Navbar;