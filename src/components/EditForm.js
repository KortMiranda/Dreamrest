import React, {  useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function EditForm(props) {
    const [cardDetails, setCardDetails] = useState()
    const [card, setCard] = useState()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [ref, setRef] = useState("")
    const { id } = useParams()

    // const backendURL = process.env.NODE_ENV === "production" ? 
    // process.env.REACT_APP_BACKENDURL:
    // "http://localhost:8000"

    useEffect(() => {
        function getCard() {
            axios.get(`http://localhost:8000/card/${id}`)
            .then(res => {
                setCardDetails(res.data)
                setTitle(res.data.title)
                setDesc(res.data.description)
                setImg(res.data.img_url)
                setRef(res.data.img_ref)
                console.log(res.data)
            })
            .catch(console.error)
        }
        getCard()
    }, [id])

    const handleSubmit = e => {
        e.preventDefault()
        const cardInfo = {
            title: e.target.Title.value == "" ? title: e.target.Title.value,
            description: e.target.Description.value == "" ? desc: e.target.Description.value,
            img_url: img,
            img_ref: e.target.Image.value,
        }
        axios.put(`http://localhost:8000/card/${id}`, cardInfo)
        .then(res => {
            setCard(res.data)
            console.log(res.data)
            window.location.replace(`http://localhost:3000/card/${id}`);
        })
        .catch(console.error)
    }
  
    return (
        <div className="edit-form-container">
            <div className="edit-form">
                <div className="edit-layout">
                    <div className="display-image">
                    <img src={img} alt={title}/>
                    </div>
                <div className="edit-details">
                    <h3>Edit Card</h3>
                    <br />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="Description" value={desc} onChange={e => setDesc(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="Image" value={img} onChange={e => setRef(e.target.value)} />
                    <br />
                    <button type= "submit" className="submit-button">Save</button>
                    <Link to={`/card/${id}`}><button>Cancel</button></Link>   
                </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default EditForm;