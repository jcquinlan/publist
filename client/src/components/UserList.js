import React from 'react';
import styled from 'styled-components';
import history from '../history';
import routeDefinitions from '../routeDefinitions';
import { Card, CardContainer, NarrowContainer } from './styled';

const UserCard = styled(Card)`
    cursor: pointer;
`;

const UserList = ({ users }) => {
    const navigateToUserList = username => {
        history.push(routeDefinitions.list(username));
    };

    const renderUsers = () => users.map(user => {
        return <UserCard onClick={() => navigateToUserList(user.username)}>{user.username}</UserCard>;
    });

    return (
        <NarrowContainer>
            <CardContainer>
                { renderUsers() }
            </CardContainer>
        </NarrowContainer>
    )
};

export default UserList;