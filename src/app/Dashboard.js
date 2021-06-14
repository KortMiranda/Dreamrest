import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Card.css'
import Masonry from 'react-masonry-css'


function Cards() {
    const [cards, setCards] = useState([])

    const breakpointCols = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    }

    useEffect(() => {
        function getCard() {
            axios.get(`https://arcane-lowlands-63405.herokuapp.com/cards/`)
            .then(res => {
                setCards(res.data)   
            })
          
            .catch(console.error)
        }
        getCard()
      
    }, [])
    return (
        <div className="card-container">
        <Masonry
            breakpointCols={breakpointCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
           {cards.map((card) => {
               return(
                       <ul>
                        <Link to={`card/${card.id}`} key={card.id}>
                        <li className="card-item">
                            <img src={card.img_url} alt={card.title}/>
                            <h4>{card.title}</h4>
                        </li>
                        </Link>
                        </ul>
               )
           })}
        </Masonry>
        </div>
    );
  }


export default Cards;