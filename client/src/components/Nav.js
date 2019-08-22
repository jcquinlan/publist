import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Container } from './styled';
import { logOutUser } from '../utility/tokenHelper';
import routeDefinitions from '../routeDefinitions';

const NavWrapper = styled.nav`
    padding: 30px 0;

    ul {
        padding: 0;

        li {
            list-style-type: none;
            display: inline-block;
            margin-right: 15px;
        }
    }
`;

const Logo = styled.h2`
    font-size: 24px;
`;

const loggedOutNav = () => {
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </>
    )
};

const loggedInNav = user => {
    return (
        <>
            <li>
                <Link to={routeDefinitions.list(user.username)}>List</Link>
            </li>
            <li>
                <Link to={routeDefinitions.add(user.username)}>Add Book</Link>
            </li>
            <li>
                <Link to={routeDefinitions.searchUsers}>Search Users</Link>
            </li>
            <li>
                <button onClick={logOutUser}>Log out</button>
            </li>
        </>
    )
};

const Nav = ({ user, activeUsername }) => {
    return (
        <NavWrapper>
            <Container>
                <Logo>publist</Logo>
                <ul>
                    { user ? loggedInNav(user) : loggedOutNav() }
                </ul>
            </Container>
        </NavWrapper>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        activeUsername: state.activeUser.username
    }
}

export default withRouter(connect(mapStateToProps)(Nav));