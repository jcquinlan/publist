import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import NewEntry from '../components/NewEntry';
import { Container, ListHeader, Button } from '../components/styled';
import { setActiveUserAction } from '../redux/actions';

const ThinSpan = styled.span`
    font-size: 16px;
    font-weight: 100;
    margin-right: 5px;
`;

const SearchPage = ({ match }) => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.activeUser.username);
    dispatch(setActiveUserAction(match.params.username));

    return (
        <Container>
            <h3><ThinSpan>New Recommendation for</ThinSpan> {username}</h3>
            <NewEntry />
        </Container>
    );
}

export default SearchPage;
