import React, { useEffect, useState} from 'react';
import axios from 'axios'
import '../css/UserProfile.css'

function MyProfile() {
    const [myProfile, setMyProfile] = useState('')
    useEffect(() => {
        function getMyProfile() {
            axios.get('http://127.0.0.1:8000/api/v1/users/auth/user/')
            .then(res => res.json())
            .then(data => {
                setMyProfile(data)
            })
            .catch(console.error)
        }
        getMyProfile()
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default MyProfile;