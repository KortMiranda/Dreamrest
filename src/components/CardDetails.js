import React, { useState, useEffect, Fragment} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import DeleteButton from './DeleteButton'
import '../css/CardDetails.css'
import BackButton from './BackButton'

function CardDetails(props) {
    const [loading, setLoading] = useState(false)
    const [card, setCards] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        function getCard() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}card/${id}`)
            .then(res => {
                setCards(res.data)
            })
            .catch(console.error)
        }
        setLoading(false)
        getCard()
    }, [id])
           
    return (
        <div>
            <BackButton />
        <div className="card-details-container">
        <div className="card-details-img">
        <img src={card.img_url} alt={card.title}/>
        </div>
        <div className="card-details">
        <div className="card-details-buttons">
        <DeleteButton />
        <Link to={`/edit/${card.id}`}><button>Edit Card</button></Link>
        </div>
        <div className="card-details-items">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        </div>
        </div>
        </div>
        </div>
    );

}

export default CardDetails;