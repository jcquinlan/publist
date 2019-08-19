import React, { useState } from 'react';
import { Container, TextInput } from '../components/styled';
import { searchUsers } from '../utility/userSearchHelpers';

const SearchUsersPage = () => {
    const [usernameQuery, setUsernameQuery] = useState('');

    const handleQueryChange = event => {
        setUsernameQuery(event.target.value);
    }

    const handleUserSearch = event => {
        event.preventDefault();
        searchUsers(usernameQuery)
            .then(response => {
                console.log(response);
            });
    }

    return (
        <Container>
            Search Users Page
            <form onSubmit={handleUserSearch}>
                <TextInput placeholder="Search User Accounts" onChange={handleQueryChange}/>
            </form>
        </Container>
    )
}

export default SearchUsersPage;