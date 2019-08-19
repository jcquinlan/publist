import React from 'react';
import { useDispatch } from 'react-redux';
import NewEntry from '../components/NewEntry';
import { Container } from '../components/styled';
import { setActiveUserAction } from '../redux/actions';

const SearchPage = ({ match }) => {
    const dispatch = useDispatch();
    dispatch(setActiveUserAction(match.params.username));

    return (
        <Container>
            <NewEntry />
        </Container>
    );
}

export default SearchPage;
