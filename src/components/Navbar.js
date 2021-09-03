import React, { useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom"
import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true)
        }
    }, [])

    return (
       <nav className="navbar">
           <div className="nav-center">
               <Link to="/" className="nav-logo">
                       <h1>Dreamrest</h1>
               </Link>
               <ul className="nav-links">
                   {isAuth === true ? (
                       <Fragment>
                           {' '}
                           <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dream-builder"><FontAwesomeIcon className="plus-icon" icon={faPlusSquare}/></Link>
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