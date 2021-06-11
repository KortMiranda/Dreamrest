import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import '../css/CardDetails.css'

function CardDetails(props) {
    const [loading, setLoading] = useState(false)
    const [card, setCards] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        function getCard() {
            axios.get(`http://localhost:8000/card/${id}`)
            .then(res => {
                setCards(res.data)
                console.log(res.data)
            })
            .catch(console.error)
        }
        setLoading(false)
        getCard()
    }, [id])
    
    if(card){
        // if card return this if not return loading please wait
    return (
        <div className="card-details-container">
            <div className="card-details-img">
            <img src={card.img_url} alt={card.title}/>
            </div>
            {/* delete option will go here */}
            <div className="card-details-items">
            <h2>{card.title}</h2>
            <p>Posted {card.natural_time}</p>
            {/* <h3>Uploaded by {card.creator.username}</h3> */}
            <p>{card.description}</p>
            <h4>{card.img_ref}</h4>   
            </div>
        </div>
    );
    } else {
        <h2>loading please wait</h2>
    }
}

export default CardDetails;