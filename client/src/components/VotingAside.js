import React, { useState } from 'react';
import styled from 'styled-components';
import { voteOnBook } from '../utility/userBookHelpers';

const UpArrow = styled.div`
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        border-bottom-color: #bbb;
    }

    border-bottom: 15px solid #ddd;
`;

const DownArrow = styled.div`
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border-top-color: #bbb;
    }
    
    border-top: 15px solid #ddd;
`;

const VotingAsideContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
    left: -50px;
    
    span {
        margin: 10px 0;
        transition: 0.3s;
    }
`;

const VotingAside = ({ book, allowVoting }) => {
    const [votes, setVotes] = useState(book.votes);
    const [hasVoted, setHasVoted] = useState(book.has_voted);
    const vote = action => {
        voteOnBook(book.id, action)
            .then(response => {
                const newVotes = action === 'inc' ? votes + 1 : votes - 1;
                setVotes(newVotes);
                setHasVoted(!hasVoted);
            })
            .catch(error => console.log(error))
    } 

    return (
            <VotingAsideContainer>
                { allowVoting && !hasVoted && <UpArrow onClick={() => vote('inc')}/>}
                <span>{votes}</span>
                { allowVoting && hasVoted && <DownArrow onClick={() => vote('dec')}/>}
            </VotingAsideContainer>
    )
};

export { VotingAside, VotingAsideContainer };
