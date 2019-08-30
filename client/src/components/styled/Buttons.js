import styled from 'styled-components';
import Colors from './colors';

const Button = styled.button`
    padding: 10px;
    background-color: ${ props => props.danger ? Colors.danger : Colors.primary };
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 100px;
    border: none;
    outline: none;
    min-width: 80px;

    &:hover {
        background-color: ${ Colors.primaryLighter }
    }
`;

const GhostButton = styled.button`
    font-size: 16px;
    background-color: transparent;
    text-decoration: underline;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
    background-image: linear-gradient( transparent 0%, transparent calc(50% - 8px), rgba(119, 15, 255, 0.10) calc(50% - 8px), rgba(119, 15, 255, 0.10) 100% );
    background-size: 100% 200%;
    background-position: 0 0;
    text-decoration: none;
`;

const ButtonRow = styled.div`
    ${Button} {
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export { Button, GhostButton, ButtonRow };