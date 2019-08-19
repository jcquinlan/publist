import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../components/styled';
import BookList from '../components/BookList';
import BookRecommendationCard from '../components/BookRecommendationCard';
import { fetchAllBooks } from '../utility/userBookHelpers';
import { setActiveUserAction } from '../redux/actions';

const ListPage = ({ user, match }) => {
    const [books, setBooks] = useState([]);
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
            <BookList books={books} BookComponent={BookRecommendationCard}/>
        </Container>
    )
};

export default ListPage;
