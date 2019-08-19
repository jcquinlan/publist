import React, { useState } from 'react';
import { NarrowContainer } from './styled';

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

    return books ? <NarrowContainer>{renderBooks()}</NarrowContainer> : null;
}

export default BookList;
