import React, { useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import '../css/Navbar.css'

function Navbar(props) {
    // const logged_out_nav = (
    //     <ul>
    //       <li onClick={() => props.display_form('login')}>login</li>
    //       <li onClick={() => props.display_form('signup')}>signup</li>
    //     </ul>
    //   );
    
    //   const logged_in_nav = (
    //     <ul>
    //       <li onClick={props.handle_logout}>logout</li>
    //     </ul>
    //   );
    //   return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
    // }
   
    return (
       <nav className="navbar">
           <div className="nav-center">
               <Link to="/" className="nav-logo">
                       <h1>Dreamrest</h1>
               </Link>
               <ul className="nav-links">
                   {/* {isAuth === true ? ( */}
                    {/* //    <Fragment> */}
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/dream-builder"><button className="add-card-button">&#x2b;</button></Link>
                        </li>
                        <li>
                            <Link to="/my-cards/:id">My Profile</Link>
                        </li>
                        {/* <li>
                            <Link to='/logout'>Logout</Link>
                        </li> */}
                       {/* </Fragment> */}
                {/* //    ) : (
                //        <Fragment>
                //            {' '}
                //            <li>
                //                 <Link to='/login'>Login</Link>
                //            </li>
                //            <li>
                //                 <Link to='/signup'>Signup</Link>
                //             </li>
                //        </Fragment>
                //    )}    */}
               </ul>
           </div>
       </nav>
    );
}

export default Navbar;

// Navbar.propTypes = {
//     logged_in: PropTypes.bool.isRequired,
//     display_form: PropTypes.func.isRequired,
//     handle_logout: PropTypes.func.isRequired
//   };