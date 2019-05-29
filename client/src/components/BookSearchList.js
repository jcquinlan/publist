import React from 'react';

function BookSearchList(props) {
    return props.books.map(book => {
        return (
            <p>{book.volumeInfo.title}</p>
        );
    })
}

export default BookSearchList;
