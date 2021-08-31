import { actionCreators as notiActions} from '../modules/notification'

//setting the actions
const SAVE_TOKEN = "SAVE_TOKEN"
const LOGOUT = "LOGOUT"
const SET_USER_LIST = "SET_USER_LIST"
const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_CARD_LIST = "SET_CARD_LIST"
const SET_USER_INFO = "SET_USER_INFO"
const SET_PROFILE = "SET_PROFILE"
const UNLOAD_PROFILE = "UNLOAD_PROFILE"

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

const setUserList = (userList) => {
    return {
        type: SET_USER_LIST,
        userList
    }
}

const setFollowUser = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}

const setUnFollowUser = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

const setCardList = (cardList) => ({
    type: SET_CARD_LIST,
    cardList
})
    
const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
})        

const setProfile = (userProfile) => ({
    type: SET_PROFILE,
    userProfile
})

const unloadProfile = () => ({
    type: UNLOAD_PROFILE
})

//API calls
const usernameLogin = (username, password) => dispatch => 
fetch("/rest-auth/login/", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        username,
        password
    })
}).then(response => response.json())
.then(json => {
    if(json.token) {
        dispatch(saveToken(json.token));
    }
})
.catch(err => console.log(err));

const createAccount = (username, password, email, name) => (dispatch) => {
    fetch("/rest-auth/registration/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            password1: password,
            password2: password,
            email,
            name
        })
    })
    .then(response => response.json())
    .then(json => {
        if(json.token) {
            dispatch(saveToken(json.token))
        }
    })
    .catch(err => console.log(err));
}

const getCardLikes = (cardId) => {
    return (dispatch, getState) => {
        const { user: {token}} = getState();
        fetch(`/images/${cardId}/likes`, {
            headers: {
                Authorization: `JWT ${token}`,
                "Content-type": "application/json"
            }
        }).then(response => {
            if(response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        }).then(json => {
            dispatch(setUserList(json));
        });
    };
}

const getExplore = () => {
    return (dispatch, getState) => {
        const { user: {token}} = getState();
        fetch(`/users/explore`, {
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        }).then(json => {
            dispatch(setUserList(json));
        });
    };
}

const followUser = (userId) => {
    return (dispatch, getState) => {
        const { user: {token} } = getState();
        dispatch(setFollowUser(userId));
        dispatch(notiActions.changeNotiListFollow(userId));
        fetch(`/users/${userId}/follow`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.state === 401) {
                dispatch(logout());
            } else if(!response.ok) {
                dispatch(setUnFollowUser(userId));
                dispatch(notiActions.changeNotiListFollow(userId));
            }
        });
    };
};

const UnFollowUser = (userId) => {
    return (dispatch, getState) => {
        const { user: {token} } = getState();
        dispatch(setUnFollowUser(userId));
        dispatch(notiActions.changeNotiListFollow(userId));
        fetch(`/users/${userId}/unfollow`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.state === 401) {
                dispatch(logout());
            } else if(!response.ok) {
                dispatch(setFollowUser(userId));
                dispatch(notiActions.changeNotiListFollow(userId));
            }
        });
    }
};

const searchByTerm = searchTerm => {
    return async (dispatch, getState) => {
        const { user: { token } } = getState();
        const userList = await searchUsers(token, searchTerm);
        const cardList = await searchCard(token, searchTerm);

        if(userList === 401 || cardList === 401 ) {
            dispatch(logout());
        }
        dispatch(setUserList(userList));
        dispatch(setCardList(cardList));
    }
}

const searchUsers = (token, searchTerm) => fetch(
    `/users/search?username=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    }).then(response => {
        if(response.status === 401) {
            return 401;
        }
        return response.json();
    }).then(json => json);

const searchCard = (token, searchTerm) => fetch(
    `/images/search?hashtags=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    }).then(response => {
        if(response.status === 401) {
            return 401;
        }
        return response.json()
    }).then(json => json)

const getProfile = (username) => {
    return (dispatch, getState) => {
        const { user: {token}} = getState()

        fetch(`/users/${username}`, {
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": 'application/json'
            }
        }).then(response => {
            if(response.status === 401) dispatch(logout())
            return response.json()
        })
        .then(json => dispatch(setProfile(json)))
    }
}

const getUserInfo = () => {
    return (dispatch, getState) => {
        const { user: { token } } = getState()

        fetch(`/users/userinfo`, {
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => response.json())
        .then(json => dispatch(setUserInfo(json)))
    }
}

const getFollowingList = (username) => {
    return (dispatch, getState) => {
        const { user: { token } } = getState(

        )
        fetch(`users/${username}/following`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then( response => response.json())
        .then(json => dispatch(setUserList(json)))
    }
}

const getFollowersList = (username) => {
    return (dispatch, getState) => {
        const { user: { token } } = getState(

        )
        fetch(`users/${username}/followers`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then( response => response.json())
        .then(json => dispatch(setUserList(json)))
    }
}

const setUnLoadProfile = () => {
    return (dispatch, getState) => {
        dispatch(unloadProfile())
    }
}

//setting the inital state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true :
    false,
    token: localStorage.getItem("jwt")
}

//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action)
        case LOGOUT:
            return applyLogout(state, action)
        case SET_USER_LIST:
            return applySetUserList(state, action)
        case FOLLOW_USER:
            return applyFollowUser(state, action)
        case UNFOLLOW_USER:
            return applyUnFollowUser(state, action)
        case SET_CARD_LIST:
            return applySetCardList(state, action)
        case SET_USER_INFO:
            return applySetUserInfo(state, action)
        case SET_PROFILE:
            return applySetProfile(state, action)
        case UNLOAD_PROFILE:
            return applyUnloadProfile(state, action)
        default:
            return state
    }
}

//reducer functions

function applySetToken(state, action) {
    const { token } = action
    localStorage.setItem("jwt", token)
    return {
        ...state,
        isLoggedIn: true,
        token
    }
}

function applyLogout(state, action) {
    localStorage.removeItem("jwt")
    return {
        isLoggedIn: false
    }
}

const applySetUserList = (state, action) => {
    const { userList } = action
    return {
        ...state,
        userList
    }
}

const applyFollowUser = (state, action) => {
    const { userId } = action
    const { userList } = state
    const updatedUserList = userList.map(user => {
        if(user.id === userId) {
            return { ...user, following: true}
        }
        return user
    })
    return {...state, userList: updatedUserList}
}

const applyUnFollowUser = (state, action) => {
    const { userId } = action
    const { userList } = state
    const updatedUserList = userList.map(user => {
        if(user.id === userId) {
            return { ...user, following: false}
        }
        return user
    })
    return {...state, userList: updatedUserList}
}

const applySetCardList = (state, action) => {
    const { cardList } = action
    return{
        ...state,
        cardList
    }
}

const applySetUserInfo = (state, action) => {
    const { userInfo } = action
    return {
        ...state,
        userInfo
    }
}

const applySetProfile = (state, action) => {
    const { userProfile } = action 
    return {
        ...state,
        userProfile
    }
}

const applyUnloadProfile = (state, action) => ({
    ...state,
    userProfile: null
})



//exports

const actionCreators = {
    usernameLogin,
    createAccount,
    logout,
    getCardLikes,
    followUser,
    UnFollowUser,
    getExplore,
    searchByTerm,
    getProfile,
    getUserInfo,
    getFollowingList,
    getFollowersList,
    setUnLoadProfile
}
export { actionCreators }

export default reducer