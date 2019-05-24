import 'jwt-decode';
import Constants from '../constants';
import store from '../redux/store';
import history from '../history';
import { logInUserAction, logOutUserAction } from '../redux/actions';

const handleNewTokens = tokens => {
    persistTokens(tokens.access, tokens.refresh)
    const user = decodeJwt(tokens.access);
    store.dispatch(logInUserAction(user));
}

const checkForAuthTokens = () => {
    const [accessToken, refreshToken] = getTokens();

    if (tokensAreValid(accessToken, refreshToken)) {
        const user = decodeJwt(accessToken);
        store.dispatch(logInUserAction(user));
    } else if (accessToken || refreshToken) {
        // If the tokens exist, but they are not valid, remove them from LS.
        clearTokens();
    }
}

const logOutUser = () => {
    clearTokens();
    store.dispatch(logOutUserAction());
    history.replace('/');
}

const getTokens = () => {
    const accessToken = localStorage.getItem(Constants.localStorage.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(Constants.localStorage.REFRESH_TOKEN);

    return [accessToken, refreshToken];
}

const userIsLoggedIn = () => {
    const [accessToken, refreshToken] = getTokens();

    return tokensAreValid(accessToken, refreshToken);
}

const persistTokens = (accessToken, refreshToken) => {
    if (accessToken) localStorage.setItem(Constants.localStorage.ACCESS_TOKEN, accessToken);
    if (refreshToken) localStorage.setItem(Constants.localStorage.REFRESH_TOKEN, refreshToken);
}

const clearTokens = () => {
    [
        Constants.localStorage.ACCESS_TOKEN,
        Constants.localStorage.REFRESH_TOKEN
    ].map(key => localStorage.removeItem(key))
}

const tokensAreValid = (accessToken, refreshToken) => !!(tokenIsValid(accessToken) && tokenIsValid(refreshToken));
const tokenIsValid = token => token && tokenIsFresh(decodeJwt(token));
const decodeJwt = jwt => JSON.parse(window.atob(jwt.split('.')[1]))

// Check to see if the expiration date of the token has not passed
const tokenIsFresh = token => token.exp && (token.exp > (new Date().getTime() / 1000));

export {
    checkForAuthTokens,
    logOutUser,
    userIsLoggedIn,
    persistTokens,
    clearTokens,
    handleNewTokens,
    tokenIsValid,
    getTokens
};
