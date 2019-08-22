import styled from 'styled-components';
import Colors from './colors';

const Button = styled.button`
    height: fit-content;
    padding: 10px;
    background-color: ${ props => props.danger ? Colors.danger : Colors.primary };
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 100px;
    border: none;
    outline: none;

    &:hover {
        background-color: ${ Colors.primaryLighter }
    }
`;

const GhostButton = styled.button`
    font-size: 14px;
    background-color: transparent;
    text-decoration: underline;
    border: none;
    color: ${ Colors.primary };
    cursor: pointer;
    transition: 0.3s;
    outline: none;
    height: fit-content;

    &:hover {
        color: ${ Colors.primaryLighter }
    }
`;

export { Button, GhostButton };