import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Card.css'
import Masonry from 'react-masonry-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

function Cards() {
  // const backendURL = process.env.NODE_ENV === "production" ? 
  // process.env.REACT_APP_BACKENDURL:
  // "https://rocky-springs-66803.herokuapp.com"
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://dreamrest.herokuapp.com/login')
          } else {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/auth/user/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
              }
            })
              .then(res => res.json())
              .then(data => {
                setUsername(data.username)
                setUserEmail(data.email);
                setLoading(false);
              })
          }
        function getCard() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
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
      {loading === false && (
        <Fragment>
          <h2>Hello {username}!</h2>
        </Fragment>
      )}
        <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
        {/* <div> */}
           {cards.map((card) => {
               return(
                //    <div className="card-display-all">
                       <ul>
                        <Link to={`card/${card.id}`} key={card.id}>
                        <li className="card-item">
                            <img src={card.img_url} alt={card.title}/>
                            <h4>{card.title}</h4>
                        </li>
                        </Link>
                        <div className="total-likes">
                        <button className="like-button"><FontAwesomeIcon icon={farHeart}/></button>
                        <p>{card.like_counts}</p>
                        </div>
                          {/* <Link to={`/user/${card.creator.id}`} key={card.creator.id} className="user-link">
                            <h4>{card.creator.username}</h4>
                          </Link> */}
                        </ul>
                //    </div> 
               )
           })}
        {/* </div> */}
        </Masonry>
        </div>
    );
}

export default Cards;