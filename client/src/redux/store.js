import { createStore, combineReducers } from 'redux';

// Actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const defaultUserState = {
    isLoggedIn: false,
    user: null
};

// Reducers
const userReducer = (userState = defaultUserState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { isLoggedIn: true, user: action.payload }

        case LOG_OUT:
            return { isLoggedIn: false, user: null }

        default:
            return { ...userState }
    }
}

const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

const defaultActiveState = {
    username: null
};

// This is a bit confusing, I admit. "activeUser" refers to the user profile that the user is
// actively looking at. This is so we know where to point certain nav items. "Add Item" will need to
// know which account we are looking at, so we know which list we are adding items to.
const activeUserReducer = (activeUserState = defaultActiveState, action) => {
    switch (action.type) {
        case SET_ACTIVE_USER:
            return { username: action.payload };
        default:
            return { ...activeUserState }
    }
}

// Store
const store = createStore(combineReducers({ user: userReducer, activeUser: activeUserReducer }));

export default store;