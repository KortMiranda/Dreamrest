const SET_NOTIFICATION_LIST = "SET_NOTIFICATION_LIST";
const UPDATE_NOTIFICATION_LIST = "UPDATE_NOTIFICATION_LIST";

//action creators
const setNotificationList = (notificationList) => {
    return {
        type: SET_NOTIFICATION_LIST,
        notificationList
    }
}

const updateNotificationList = (notificationList) => {
    return{
        type:UPDATE_NOTIFICATION_LIST,
        notificationList
    }
}

// API Call
const getNotification = () => {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch('/notifications/', {
            headers: {
                "Authorization": `JWT ${token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(json => {
            dispatch(setNotificationList(json));
        });
    };
};

const changeNotiListFollow = (followUserId) => {
    return (dispatch, getState) => {
        const { notification: { notificationList: currentNoti }} = getState();
        if(!!currentNoti) {
            const notificationList = currentNoti.map( noti => {
                if(noti.from_user.id === followUserId) {
                    return {...noti, from_user: { ...noti.from_user, following: !noti.from_user.following }};
                }
                return noti;
            });
            dispatch(updateNotificationList(notificationList));
        }
    };
};

const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATION_LIST:
            return applySetNotificationList(state, action);
        case UPDATE_NOTIFICATION_LIST:
            return applyChangeNotiListFollow(state, action)
        default:
            return state;
    }
}

// reduce functions 
const applySetNotificationList = (state, action) => {
    const { notificationList } = action;
    return {
        ...state,
        notificationList
    };
};

const applyChangeNotiListFollow = (state, action) => {
    const { notificationList } = action;
    return {
        ...state,
        notificationList
    }
};

//exports
const actionCreators = {
    getNotification,
    changeNotiListFollow
}

export { actionCreators }

export default reducer