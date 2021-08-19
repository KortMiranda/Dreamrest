import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function AddCard(props) {
    const [addCard, setAddCard] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [img, setImg] = useState()
    const [ref, setRef] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        const cardInfo = {
            img_url: img,
            title: title,
            description: desc,
            img_ref: ref,
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}cards/`, cardInfo)
        .then(res => {
            setAddCard(res.data)
            window.location.replace('https://dreamrest.herokuapp.com/');
        })
    }

    
    return (
        <div className="form-container">
            <div className="add-form">
                <form onSubmit={handleSubmit}>
                    <h3>Add New Card</h3>
                    <input type="text" name="Image" placeholder="Image url goes here" onChange={e => setImg(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="Title" placeholder="Add your title" onChange={e => setTitle(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="Description" placeholder="Talk about this dream a little more..." onChange={e => setDesc(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="Image Ref" placeholder="Refrence link" onChange={e => setRef(e.target.value)} />
                    <br />
                    <button type= "submit" className="submit-button">Save</button>
                    <Link to={`/`}><button>Cancel</button></Link>
                </form>
            </div>
        </div>
    );
}

export default AddCard;