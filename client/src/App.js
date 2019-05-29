import React from 'react';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import history from './history';
import { LoginPage, RegisterPage, ListPage } from './pages';
import { checkForAuthTokens } from './utility/tokenHelper';
import Nav from './components/Nav';

function Index() {
    return <h2>Home</h2>;
}

function App(props) {
    checkForAuthTokens();

    return (
        <Router history={history}>
            <Nav />
            <Switch> 
                <Route exact path="/" component={Index} />
                <Route path="/login" component={LoginPage} />
                <Route path="/list" component={ListPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </Router>
    );
}


export default App;
