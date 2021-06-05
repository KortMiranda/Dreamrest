import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../Card.css'
import Masonry from 'react-masonry-css'

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
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
        {/* <div> */}
           {cards.map((card) => {
               return(
                //    <div className="card-display-all">
                       <ul>
                        <li className="card-item">
                            <img src={card.img_url} alt={card.title}/>
                            <h4>{card.title}</h4>
                        </li>
                        </ul>
                //    </div>
                   
                   
               )
           })}
        {/* </div> */}
        </Masonry>
    );
}

export default Cards;