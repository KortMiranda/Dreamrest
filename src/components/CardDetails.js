import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import '../css/CardDetails.css'

function CardDetails(props) {
    const [card, setCards] = useState([])
    const { id } = useParams()

    useEffect(() => {
        function getCard() {
            axios.get(`http://localhost:8000/cards/${id}`)
            .then(res => {
                setCards(res.data)
                console.log(res.data)
            })
            .catch(console.error)
        }
        getCard()
    }, [id])
    return (
        <div className="card-details-container">
            <div className="card-details-img">
            <img src={card.img_url} alt={card.title}/>
            </div>
            {/* delete option will go here */}
            <div className="card-details-items">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <h4>{card.img_ref}</h4>   
            </div>
        </div>
    );
}

export default CardDetails;