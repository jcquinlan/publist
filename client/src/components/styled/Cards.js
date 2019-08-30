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

const FormCard = styled(Card)`
    input {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export { Card, CardContainer, FormCard };
