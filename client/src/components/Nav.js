import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logOutUser } from '../utility/tokenHelper';

function Nav(props) {
    return (
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                { props.user ? props.user.username : 'Not signed in' }
            </li>
            <li onClick={logOutUser}>
                Log out
            </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Nav);