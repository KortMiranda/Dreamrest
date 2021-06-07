import React, { useState } from 'react';
import LikeTotal from './LikeTotal'

function Likes(props) {
    let[totalLikes, setLikes] = useState(0)

    function addLike() {
        totalLikes++;
        setLikes(totalLikes)
    }
    return (
        <div>
            <button className="like-button" onClick={() => addLike(totalLikes)}>+</button>
            <LikeTotal totalLikes={totalLikes}/>
        </div>
    );
}

export default Likes;