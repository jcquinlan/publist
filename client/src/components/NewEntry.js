import React, { useState } from 'react';
import { searchBooks } from '../utility/bookSearchHelper';
import BookSearchList from './BookSearchList';

function NewEntry(props) {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    function searchBooksHandler(event) {
        event.preventDefault();
        searchBooks(query)
            .then(books => {
                setBooks(books.items);
                console.log(books.items);
            });
    }

    function handleQueryChange(event) {
        setQuery(event.target.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={searchBooksHandler}>
                <input type="text" value={query} name="query" placeholder="Search Books" onChange={handleQueryChange} />
            </form>

            <BookSearchList books={books} />
        </React.Fragment>
    )
}

export default NewEntry;
