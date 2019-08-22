import styled from 'styled-components';

const Card = styled.div`
    padding: 15px;
    border: 1px solid #eee;
    background-color: #fff;
    border-radius: 5px;
`;

const CardContainer = styled.div`
    padding-top: 15px;

    ${Card} {
        margin-bottom: 15px;
    }
`;

export { Card, CardContainer };
