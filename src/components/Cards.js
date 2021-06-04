import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cards(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        function getCard() {
            axios.get('http://localhost:8000/cards/')
            .then(res => {
                setCards(res.data)
                console.log(res.data)
            })
            .catch(console.error)
        }
        getCard()
    }, [])
    return (
        <div>
           {cards.map((card) => {
               return(
                   <div className="card-display-all">
                       <ul>
                        <li className="card-list">
                            <h4>{card.title}</h4>
                            <img src={card.img_url} alt={card.title}/>
                            <p>{card.description}</p>
                        </li>
                        </ul>
                   </div>
                   
                   
               )
           })}
        </div>
    );
}

export default Cards;