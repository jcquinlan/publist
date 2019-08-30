import React, { useState } from 'react';
import { Container, TextInput, Title, Flex } from '../components/styled';
import { searchUsers } from '../utility/userSearchHelpers';
import UserList from '../components/UserList';
import IconInput from '../components/IconInput';

const SearchUsersPage = () => {
    const [usernameQuery, setUsernameQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleQueryChange = event => {
        setUsernameQuery(event.target.value);
    }

    const handleUserSearch = event => {
        event.preventDefault();
        searchUsers(usernameQuery)
            .then(response => {
                setUsers(response);
                setHasSearched(true);
            });
    }

    const renderUserListUI = () => {
        if (!users.length) {
            if (hasSearched) {
                return <p>Huh, can't find any users like that. Maybe try something else?</p>
            }
        }

        return <UserList users={users} />

    }

    return (
        <Container>
            <Flex justifyContent="space-between" alignItems="center">
                <Title>User Search</Title>
                { users.length ? <p>{users.length} user{users.length === 1 ? '' : 's'}</p> : null }
            </Flex>

            <form onSubmit={handleUserSearch}>
                <IconInput
                    placeholder="Search accounts by username"
                    onChange={handleQueryChange}
                    onClick={handleUserSearch} />
            </form>

            {renderUserListUI()}

        </Container>
    )
}

export default SearchUsersPage;