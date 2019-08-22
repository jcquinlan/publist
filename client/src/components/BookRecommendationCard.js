import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
    Subheader,
    BookCard,
    BookCardImage,
    BookCardHeader,
    BookCardBody,
    BookCardFooter } from './styled';
import TruncateText from './TruncateText';
import { VotingAside, VotingAsideContainer } from './VotingAside';
import useClickOutsideRef from '../hooks/useClickOutsideRef';


const RecommendedBookCard = styled(BookCard)`
    &:hover {
        ${VotingAsideContainer} {
            span {
                margin: 15px 0;
            }
        }
    }
`;

const VotingWrapper = styled.div`
    position: relative;
`;

const GhostText = styled.p`
    font-size: 14px;
    color: #bbb;
`;

const missingExplanationText = <GhostText>Whoever recommended this book didn't feel like explaining why.</GhostText>

const ActiveBookRecommendationUI = ({ book, activeBook, selectBook }) => {
    const isActive = activeBook && activeBook === book;
    const currentUser = useSelector(state => state.user.user);
    const currentActiveUser = useSelector(state => state.activeUser.username);
    const isOwnersBook = currentUser && currentUser.username === currentActiveUser;
    const wrapperRef = useRef(null);

    useClickOutsideRef(wrapperRef, () => {
        selectBook(null);
    });

    const renderOwnerButtons = () => {
        if (!isOwnersBook) return;

        return [
            <button>Delete</button>,
            <button>Mark Completed</button>
        ]
    }

    return (
        <RecommendedBookCard
            ref={wrapperRef}
            deactivated={activeBook && activeBook !== book}
            selected={isActive}
            onClick={() => !isActive && selectBook()}
        >
            <BookCardImage image={book.thumbnail} />,
            <BookCardBody>
                <div>
                    <BookCardHeader>{book.title}</BookCardHeader>
                    <Subheader>{book.authors}</Subheader>
                </div>

                <div>
                    <TruncateText>{book.explanation || missingExplanationText }</TruncateText>
                </div>

                <BookCardFooter>
                    { renderOwnerButtons() } 
                </BookCardFooter>
            </BookCardBody>
        </RecommendedBookCard>
    )
}

const BookRecommendationCard = ({ book, activeBook, selectBook }) => {
    const isActive = activeBook && activeBook === book;
    const currentUser = useSelector(state => state.user.user);
    const currentActiveUser = useSelector(state => state.activeUser.username);
    const isOwnersBook = currentUser && currentUser.username === currentActiveUser;

    const renderInactiveView = () => {
        return (
            <RecommendedBookCard
                deactivated={activeBook && activeBook !== book}
                selected={isActive}
                onClick={() => !isActive && selectBook()}
            >
                <BookCardImage image={book.thumbnail} />,
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
            </RecommendedBookCard>
        )
    }

    return (
        <VotingWrapper>
            <VotingAside book={book} allowVoting={!isOwnersBook} />
            { isActive ? <ActiveBookRecommendationUI book={book} activeBook={activeBook} selectBook={selectBook}/> : renderInactiveView() }
        </VotingWrapper>
    )
};

export default BookRecommendationCard;
