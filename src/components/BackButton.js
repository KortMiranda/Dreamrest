import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function BackButton(props) {
    return (
        <div classname="container">
            <Link to={'/'}><FontAwesomeIcon className="back-button" icon={faArrowLeft}/></Link>
        </div>
    );
}

export default BackButton;