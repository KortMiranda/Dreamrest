import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/UserProfile.css'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'


function UserProfile() {
    const [loading, setLoading] = useState(false)
    const [userProfile, setUserProfile] = useState()
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        function getUserProfile() {
            axios.get(`http://localhost:8000/user/${id}`)
            .then(res => {
                const profile = res.data
                setUserProfile(profile)
                console.log(profile)
                if(profile) {
                    const {
                        profile_image,
                        followers_count,
                        following_count,
                        name,
                        bio,
                        cards,
                    } = profile
                    const profileView = {
                        profile_image,
                        followers_count,
                        following_count,
                        name,
                        bio,
                        cards
                    }
                    setUserProfile(profileView)
                } else {
                    setUserProfile(null)
                }
            })
            .catch(console.error)
        }
        setLoading(false)
        getUserProfile()
    }, [id])
    if(loading) {
        return <h2>Loading dreamer...</h2>
    }
    if(!userProfile) {
        return <h2>No user found</h2>
    } else {
        const {
            profile_image,
            followers_count,
            following_count,
            name,
            bio,
            cards
        } = userProfile
    
    return (
        <div>
            <div className="user-profile">
                <img src={profile_image} alt={name}/>
                <h2>{name}</h2>
                <p>{bio}</p>
                <div className="follows">
                <div className="the-following">
                <p>followers {followers_count}</p>
                </div>
                <div className="the-following">
                <p>following {following_count}</p>
                </div>
                </div>
            </div>
            <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {cards.map((card) => {
                    return (
                    <li className="card-item">
                    <img src={card.img_url} alt={card.title}/>
                    <h4>{card.title}</h4>
                    <div className="total-likes">
                    <button className="like-button"><FontAwesomeIcon icon={farHeart}/></button>
                    <p>{card.like_counts}</p>
                    </div>
                </li>
                    )
                })}
            </Masonry>
        </div>
    );
    }
}

export default UserProfile;