import React, { useState } from 'react';
import { NarrowContainer } from './styled';

const emptyState = <center>Nothing yet, mate. Maybe <a href="https://en.wikipedia.org/wiki/Special:Random">this will tide you over for now.</a></center>

function BookList({ books, BookComponent }) {
    const [activeBook, setActiveBook] = useState(null);

    const renderBooks = () => {
        return books.map(book => {
            return <BookComponent
                key={book.googleId}
                book={book}
                activeBook={activeBook}
                selectBook={() => setActiveBook(activeBook ? null : book)}
            />
        });
    };

    return books.length ? <NarrowContainer>{renderBooks()}</NarrowContainer> : emptyState;
}

export default BookList;
