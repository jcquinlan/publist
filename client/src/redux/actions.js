const logInUserAction = user => {
    return {
        type: 'LOG_IN',
        payload: user
    }
}

const logOutUserAction= () => {
    return {
        type: 'LOG_OUT'
    }
}

const setActiveUserAction = username => {
    return {
        type: 'SET_ACTIVE_USER',
        payload: username
    }
}

export { logInUserAction, logOutUserAction, setActiveUserAction };