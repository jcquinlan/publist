import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, GhostButton } from '../components/styled';
import BookList from '../components/BookList';
import BookRecommendationCard from '../components/BookRecommendationCard';
import { fetchAllBooks } from '../utility/userBookHelpers';
import { setActiveUserAction } from '../redux/actions';

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 45px;
    border-bottom: 1px solid #eee;
`; 

const ListPage = ({ user, match }) => {
    const [books, setBooks] = useState([]);
    const username = useSelector(state => state.activeUser.username);
    const dispatch = useDispatch();
    dispatch(setActiveUserAction(match.params.username));

    useEffect(() => {
        fetchAllBooks(match.params.username)
            .then(response => {
                setBooks(response)
            })
    }, []);

    return (
        <Container>
            <ListHeader>
                <p>{books.length} item{books.length === 1 ? '' : 's'}</p>
                <p>{username}'s books</p>
                <Button>Recommend a book</Button>
            </ListHeader>

            <BookList books={books} BookComponent={BookRecommendationCard}/>
        </Container>
    )
};

export default ListPage;
