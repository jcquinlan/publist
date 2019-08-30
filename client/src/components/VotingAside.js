import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from './styled/colors';
import { voteOnBook } from '../utility/userBookHelpers';

const arrowStyles = css`
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    cursor: pointer;
    transition: 0.3s;
`;

const disabledArrowStyles = css`
    cursor: inherit;
    opacity: 0.5;
`;

const activeArrowStyles = css`
    border-bottom-color: ${ Colors.primary };
    cursor: initial;

    &:hover {
        border-bottom-color: ${ Colors.primary };
    }
`

const UpArrow = styled.div`
    ${ arrowStyles }
    border-bottom: 15px solid #ddd;
    ${ props => props.disabled ? disabledArrowStyles : '' }
    ${ props => props.active ? activeArrowStyles : '' };

    &:hover {
        ${ props => props.disabled ? '' : 'border-bottom-color: #bbb' };
        ${ props => props.active ? `border-bottom-color: ${ Colors.primary }` : '' };
    }

`;

const DownArrow = styled.div`
    ${ arrowStyles}
    ${ props => props.disabled ? disabledArrowStyles : '' }

    &:hover {
        ${ props => props.disabled ? '' : 'border-top-color: #bbb' };
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
        if (!allowVoting) return;

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
                { <UpArrow active={hasVoted} disabled={!allowVoting} onClick={() => vote('inc')}/>}
                <span>{votes}</span>
                { <DownArrow disabled={!hasVoted || !allowVoting} onClick={() => vote('dec')}/>}
            </VotingAsideContainer>
    )
};

export { VotingAside, VotingAsideContainer };
