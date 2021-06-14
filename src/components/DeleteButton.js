import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DeleteButton(props) {
    const { id } = useParams()
    
    function handleSubmit(e) {
        axios.delete(`https://arcane-lowlands-63405.herokuapp.com/card/${id}`)
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