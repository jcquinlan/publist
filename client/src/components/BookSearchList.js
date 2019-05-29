import React from 'react';

function BookSearchList(props) {
    if (!props.books) return null;

    return props.books.map(book => {
        return (
            <p key={book.googleId}>{book.title}</p>
        );
    })
}

export default BookSearchList;
