import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Card.css'
import Masonry from 'react-masonry-css'


function Cards() {
//     const backendURL = process.env.NODE_ENV === "production" ? 
//   process.env.REACT_APP_BACKEND_URL:
//   "https://guarded-crag-20391.herokuapp.com/"
    // const [cards, setCards] = useState([])
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);

    // const breakpointCols = {
    //   default: 4,
    //   1100: 3,
    //   700: 2,
    //   500: 1
    // }
    
    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://localhost:3000/login');
          } else {
            fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
              }
            })
              .then(res => res.json())
              .then(data => {
                setUserEmail(data.email);
                setLoading(false);
              });
          }
        // function getCard() {
        //     axios.get(`http://localhost:3000/login`)
        //     .then(res => {
        //         setCards(res.data)   
        //     })
          
        //     .catch(console.error)
        // }
        // getCard()
      
    }, [])
    return (
        <div>
        {loading === false && (
          <Fragment>
            <h1>Dashboard</h1>
            <h2>Hello {userEmail}!</h2>
          </Fragment>
        )}
      </div>
        // <div className="card-container">
        // <Masonry
        //     breakpointCols={breakpointCols}
        //     className="my-masonry-grid"
        //     columnClassName="my-masonry-grid_column">
        //    {cards.map((card) => {
        //        return(
        //                <ul>
        //                 <Link to={`card/${card.id}`} key={card.id}>
        //                 <li className="card-item">
        //                     <img src={card.img_url} alt={card.title}/>
        //                     <h4>{card.title}</h4>
        //                 </li>
        //                 </Link>
        //                 </ul>
        //        )
        //    })}
        // </Masonry>
        // </div>
    );
  }


export default Cards;