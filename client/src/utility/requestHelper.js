import history from '../history';
import routeDefinitions from '../routeDefinitions';
import { handleNewTokens, getTokens, tokenIsValid } from './tokenHelper';

const assembleUrl = url => '/api' + url;

const get = (url, options) => {
   return fetch(assembleUrl(url), {
       headers: buildHeaders(),
       ...options
   })
   .then(handleResponse);
};

const post = (url, body, options) => {
    return fetch(assembleUrl(url), {
        method: 'post',
        headers: buildHeaders(),
        body: JSON.stringify(body),
        ...options
    })
    .then(handleResponse);
};

const deleteRequest = (url, options) => {
    return fetch(assembleUrl(url), {
        method: 'delete',
        headers: buildHeaders(),
        ...options
    })
    .then(handleResponse);
};

const login = (username, password) => {
    return post('/token', { username, password })
        .then(handleNewTokens)
        .then(() => history.replace(routeDefinitions.list(username)));
};

const register = (username, email, password) => {
    return post('/register', { username, email, password })
        .then(() => login(username, password));
};

// Throws error if it isn't a 200-299 response code. Otherwise, it resolves with the parsed JSON
// response.
const handleResponse = response => {
    return response.json()
        .then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
        
            return json;
        });
};

const buildHeaders = () => {
    const [accessToken, refreshToken] = getTokens();
    const headers = {
        'Content-Type': 'application/json'
    };

    // If we have an access token, and its valid, add it to the request
    if (tokenIsValid(accessToken)) {
        Object.assign(headers, {
            'Authorization': 'Bearer ' + accessToken
        });
    }

    return headers;
};

export { get, post, login, register, deleteRequest };