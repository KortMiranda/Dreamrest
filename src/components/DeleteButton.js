import React from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function DeleteButton(props) {
    const { id } = useParams()
    
    function handleSubmit(e) {
        axios.delete(`http://localhost:8000/${id}`)
        .then(res => {
            window.location.replace('http://localhost:3000/')
        })
    }
    return (
        <div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="delete-confirm"
                >Delete</button>
        </div>
    );
}

export default DeleteButton;