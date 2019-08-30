import React from 'react';
import styled from 'styled-components';

const ErrorCard = styled.div`
    width: 100%;
    background-color: red;
    color: #fff;
    padding: 0 30px;
    box-sizing: border-box;

    &:last-child {
        border-radius: 0 0 5px 5px;
    }

    p {
        margin-bottom: 0;
        text-transform: capitalize;
    }
    
    ul {
        margin-top: 5px;
        list-style-type: none;
    }
`;

const ErrorList = ({errors}) => {
    return Object.keys(errors).map(field => {
        const errorsUI = errors[field].map(error => {
            return <li>{error}</li>
        });

        return (
            <ErrorCard>
                <p>{field}</p>
                <ul>
                    {errorsUI}
                </ul>
            </ErrorCard>
        )
    });
};

export default ErrorList;