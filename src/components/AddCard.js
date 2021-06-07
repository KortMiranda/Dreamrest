import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function AddCard(props) {
    const [addCard, setAddCard] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [img, setImg] = useState()
    const [ref, setRef] = useState()
    const [errors, setErrors] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        const cardInfo = {
            title: title,
            description: desc,
            img_url: img,
            img_ref: ref,
        }
        axios.post('http://localhost:8000/cards/', cardInfo)
        .then(res => {
            setAddCard(res.data)
            console.log(res.data)
            window.location.replace('http://localhost:3000/');
        })
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="Title" placeholder="Add your title" onChange={e => setTitle(e.target.value)} />
                <br />
                <br />
                <input type="text" name="Description" placeholder="Talk about this dream a little more..." onChange={e => setDesc(e.target.value)} />
                <br />
                <br />
                <input type="text" name="Image Url" placeholder="Paste image url here" onChange={e => setImg(e.target.value)} />
                <br />
                <br />
                <input type="text" name="Image Ref" placeholder="Refrence link" onChange={e => setRef(e.target.value)} />
                <br />
                <button type= "submit" className="submit-button">Save</button>
                <Link to={`/`}><button className="back-button">Cancel</button></Link>

            </form>
        </div>
    );
}

export default AddCard;