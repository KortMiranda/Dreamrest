import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DeleteButton(props) {
    const { id } = useParams()
    
    function handleSubmit(e) {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}card/${id}`)
        .then(res => {
            window.location.replace('https://dreamrest.herokuapp.com/')
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