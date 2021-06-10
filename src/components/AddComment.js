import React, { useState } from 'react';
import axios from 'axios'


function AddComment(props) {
    const [addComment, setAddComment] = useState()

    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="Comment" placeholder="Add a comment"/>
            </form>
            <button type="submit" className="submit-button">Done</button>
            
        </div>
    );
}

export default AddComment;