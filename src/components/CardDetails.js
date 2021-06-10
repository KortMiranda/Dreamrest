import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import AddComment from './AddComment'
import axios from "axios"
import '../css/CardDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

function CardDetails(props) {
    const [loading, setLoading] = useState(false)
    const [card, setCards] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        function getCard() {
            axios.get(`http://localhost:8000/${id}`)
            .then(res => {
                const cardData = res.data
                setCards(cardData)
                console.log(cardData)
                if(cardData) {
                    const {
                        img_url,
                        title,
                        description,
                        comments,
                        like_counts,
                        creator,
                        natural_time,
                        is_liked,
                        img_ref
                    } = cardData
                    const cardView = {
                        img_url,
                        title,
                        description,
                        comments,
                        like_counts,
                        creator,
                        natural_time,
                        is_liked,
                        img_ref
                    }
                    setCards(cardView)
                } else {
                    setCards(null)
                }
            })
            .catch(console.error)
        }
        setLoading(false)
        getCard()
    }, [id])
    
    if(loading){
        return <h2>Loading card...</h2>
    }
    if(!card) {
        return <h2>No card found</h2>
    } else {
        const {
            img_url,
            title,
            description,
            comments,
            like_counts,
            creator,
            natural_time,
            is_liked,
            img_ref
        } = card
    
    return (
        <div className="card-details-container">
            <div className="card-details-img">
            <img src={img_url} alt={title}/>
            </div>
            <div className="card-details-items">
            <DeleteButton />
            <h2>{title}</h2>
            <p>Posted {natural_time}</p>
            {/* <h3>Uploaded by {creator.username}</h3> */}
            <div className="total-likes">
                <button className="like-button"><FontAwesomeIcon icon={farHeart}/></button>
                <p>{like_counts}</p>
                </div>
            <p>{description}</p>
            <h4>{img_ref}</h4>  
            <h3>Comments</h3> 
            {/* {comments.map((comment) => {
                return(
            <p>{comment.message}</p>
                )
            })} */}
            <AddComment />
            </div>
        </div>
    );
    }
}

export default CardDetails;