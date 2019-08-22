import React, { useState } from 'react';
import { Container, TextInput } from '../components/styled';
import { searchUsers } from '../utility/userSearchHelpers';
import UserList from '../components/UserList';

const SearchUsersPage = () => {
    const [usernameQuery, setUsernameQuery] = useState('');
    const [users, setUsers] = useState([]);

    const handleQueryChange = event => {
        setUsernameQuery(event.target.value);
    }

    const handleUserSearch = event => {
        event.preventDefault();
        searchUsers(usernameQuery)
            .then(response => {
                setUsers(response);
            });
    }

    return (
        <Container>
            <form onSubmit={handleUserSearch}>
                <TextInput placeholder="Search User Accounts" onChange={handleQueryChange}/>
            </form>

            <UserList users={users} />
        </Container>
    )
}

export default SearchUsersPage;