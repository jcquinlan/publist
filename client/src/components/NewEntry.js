import React, { useState } from 'react';
import { TextInput } from './styled';
import { searchBooks } from '../utility/userBookHelpers';
import BookList from './BookList';
import NewBookCard from './NewBookCard';
import createBook from '../utility/createBook';

const NewEntry = (props) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    function searchBooksHandler(event) {
        event.preventDefault();
        searchBooks(query)
            .then(books => {
                console.log(books.items);
                const cleanedBooks = books.items.map(createBook);
                setBooks(cleanedBooks);
            });
    }

    function handleQueryChange(event) {
        setQuery(event.target.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={searchBooksHandler}>
                <TextInput type="text" value={query} name="query" placeholder="Search Books" onChange={handleQueryChange} />
            </form>

            <BookList books={books} BookComponent={NewBookCard} />
        </React.Fragment>
    )
}

export default NewEntry;
