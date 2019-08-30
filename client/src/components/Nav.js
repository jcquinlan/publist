import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Container, GhostButton } from './styled';
import { logOutUser } from '../utility/tokenHelper';
import routeDefinitions from '../routeDefinitions';

const SubLogoText = styled.p`
    margin: 0;
    font-size: 13px;
    color: #777;
`;

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
    margin-bottom: 0;
`;

const loggedOutNav = () => {
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to={routeDefinitions.searchUsers}>Search Users</Link>
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
                <Link to={routeDefinitions.list(user.username)}>My List</Link>
            </li>
            <li>
                <Link to={routeDefinitions.searchUsers}>Search Users</Link>
            </li>
            <li>
                <GhostButton onClick={logOutUser}>Log out</GhostButton>
            </li>
        </>
    )
};

const Nav = ({ user, activeUsername }) => {
    return (
        <NavWrapper>
            <Container>
                <Logo>publist</Logo>
                <SubLogoText>crowdsourced reading lists, for the stuff you like</SubLogoText>
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