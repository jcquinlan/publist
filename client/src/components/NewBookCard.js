import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import history from '../history';
import routeDefinitions from '../routeDefinitions';
import TruncateText from './TruncateText';
import {
    Subheader,
    Flex,
    TextArea,
    BookCard,
    BookCardBody,
    BookCardHeader,
    BookCardFooter,
    BookCardImage
 } from './styled';
import useClickOutsideRef from '../hooks/useClickOutsideRef';
import { createBookRecommendation } from '../utility/userBookHelpers';

const SaveBookCardBody = styled(BookCardBody)`
    width: 100%;
`;

const NewBookTextArea = styled(TextArea)`
    height: 100%;
`;

const SaveNewBookCard = ({ book, selectBook }) => {
    const wrapperRef = useRef(null);
    const [explanation, setExplanation] = useState('');
    const activeUsername = useSelector(state => state.activeUser.username);

    useClickOutsideRef(wrapperRef, () => {
        selectBook(null);
    });

    const saveBook = () => {
        createBookRecommendation(activeUsername, Object.assign({}, book, { explanation }))
            .then(response => {
                history.push(routeDefinitions.list(activeUsername))
            });
    }

    return (
        <SaveBookCardBody ref={wrapperRef}>
            <Flex flexDirection="column" flexGrow="2">
                <BookCardHeader>{book.title}</BookCardHeader>
                <NewBookTextArea
                    value={explanation}
                    onChange={event => setExplanation(event.target.value)}
                    placeholder="Add a note about why you recommend this"
                />
            </Flex>

            <BookCardFooter>
                <button onClick={saveBook}>Save</button>
                <button onClick={() => selectBook(null)}>Cancel</button>
            </BookCardFooter>
        </SaveBookCardBody> 
    )
}

const NewBookCard = ({ book, activeBook, selectBook }) => {
    const isActive = activeBook && activeBook === book;

    const renderBookPreview = () => {
        return (
            <>
                <BookCardImage image={book.thumbnail} />
                <BookCardBody>
                    <div>
                        <BookCardHeader>{book.title}</BookCardHeader>
                        <Subheader>{book.authors}</Subheader>
                    </div>

                    <div>
                        <TruncateText>{book.description}</TruncateText>
                    </div>

                    <BookCardFooter>

                    </BookCardFooter>
                </BookCardBody>
            </>
        )
    }

    return (
        <BookCard
            deactivated={activeBook && activeBook !== book}
            selected={isActive}
            onClick={() => !isActive && selectBook()}
        >
            { isActive ? <SaveNewBookCard book={book} selectBook={selectBook} /> : renderBookPreview() }
        </BookCard>
    )
};

export default NewBookCard;
