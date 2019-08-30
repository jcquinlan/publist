import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import { LoginPage, RegisterPage, SearchPage, ListPage, SearchUsersPage } from './pages';
import { checkForAuthTokens } from './utility/tokenHelper';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App(props) {
    checkForAuthTokens();

    return (
        <Router history={history}>
            <Nav />
            <Switch> 
                <Route exact path="/" component={LoginPage} />
                <Route path="/search" component={SearchUsersPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/:username/add" component={SearchPage} />
                <Route path="/:username" component={ListPage} />
            </Switch>
            <Footer />
        </Router>
    );
}


export default App;
