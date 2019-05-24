import { createStore } from 'redux';

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

// Store
const store = createStore(userReducer);

export default store;