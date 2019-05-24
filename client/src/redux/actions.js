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

export { logInUserAction, logOutUserAction };