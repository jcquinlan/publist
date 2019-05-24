const prod = {
    API_BASE: 'https://publist.herokuapp.com/'
}

const dev = {
    API_BASE: 'http://localhost:5000/'
}

const config = process.env.REACT_APP_ENVIRONMENT === 'production' ? prod : dev;

export default { ...config };