import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from './styled';
import { searchBooks } from '../utility/userBookHelpers';
import BookList from './BookList';
import NewBookCard from './NewBookCard';
import IconInput from './IconInput';
import createBook from '../utility/createBook';
import HorseGif from '../images/horsey.gif';

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    font-family: "DM Serif Text";

    img {
        margin: 15px 0;
        border-radius: 7px;
        box-shadow: 0px 10px 10px 1px rgba(0,0,0,0.2);
    }
`;

const NewEntry = (props) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    function searchBooksHandler(event) {
        event.preventDefault();
        setLoading(true);
        searchBooks(query)
            .then(books => {
                if (!books.items) return;

                const cleanedBooks = books.items.map(createBook);
                setBooks(cleanedBooks);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    function handleQueryChange(event) {
        setQuery(event.target.value);
    }

    function renderEmptyState() {
        return <p>Search above to make a recommendation. Powered by Google Books.</p>
    }

    function renderLoading() {
        if (!loading) return null;

        return (
            <LoadingContainer>
                Loading...
                <img src={HorseGif} />
            </LoadingContainer>
        )
    }

    function renderListUI() {
        if (loading) return renderLoading()
        return books.length ? <BookList books={books} BookComponent={NewBookCard} /> : renderEmptyState()
    }

    return (
        <React.Fragment>
            <form onSubmit={searchBooksHandler}>
                <IconInput
                    type="text"
                    value={query}
                    name="query"
                    placeholder="Search Books"
                    onChange={handleQueryChange}
                    onClick={searchBooksHandler} />
            </form>

            { renderListUI() }

        </React.Fragment>
    )
}

export default NewEntry;
