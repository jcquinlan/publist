import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, GhostButton, ListHeader, Flex } from '../components/styled';
import routeDefitions from '../routeDefinitions';
import history from '../history';
import BookList from '../components/BookList';
import BookRecommendationCard from '../components/BookRecommendationCard';
import { fetchAllBooks } from '../utility/userBookHelpers';
import { setActiveUserAction } from '../redux/actions';

const UsernameTitle = styled.h3`
    margin-right: 15px;
`;

const ListPage = ({ user, match }) => {
    const [books, setBooks] = useState([]);
    const username = useSelector(state => state.activeUser.username);
    const dispatch = useDispatch();
    dispatch(setActiveUserAction(match.params.username));

    useEffect(() => {
        fetchAllBooks(match.params.username)
            .then(response => {
                setBooks(response.sort((b1, b2) => b2.votes - b1.votes))
            })
    }, [match]);

    return (
        <Container>
            <ListHeader>
                <Flex alignItems="center">
                    <UsernameTitle>{username}</UsernameTitle>
                    <p>{books.length} item{books.length === 1 ? '' : 's'}</p>
                </Flex>
                <Button onClick={() => history.push(routeDefitions.add(match.params.username))}>Add a Book</Button>
            </ListHeader>

            <BookList books={books} BookComponent={BookRecommendationCard}/>
        </Container>
    )
};

export default ListPage;
