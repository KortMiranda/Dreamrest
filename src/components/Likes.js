import React, { useState } from 'react';
import LikeTotal from './LikeTotal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

function Likes(props) {
    let[totalLikes, setLikes] = useState(0)

    function addLike() {
        totalLikes++;
        setLikes(totalLikes)
    }
    return (
        <div className='total-likes'>
            <button className="like-button" onClick={() => addLike(totalLikes)}><FontAwesomeIcon icon={farHeart}/></button>
            <LikeTotal totalLikes={totalLikes}/>
        </div>
    );
}

export default Likes;