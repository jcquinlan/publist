import styled, { css } from 'styled-components';
import { Header, TextArea} from '.';

const BookCard = styled.div`
    display: flex;
    position: relative;
    min-height: 250px;
    margin: 10px 0;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    transition: 0.3s;
    opacity: ${ props => props.deactivated ? '0.1' : '1' };

    :hover {
        transform: translateX(15px);
        border-color: #ddd;
    }
    
    ${ props => !props.selected ? '' : css`
        transform: translateX(15px);
        border-color: #ddd;`
    }
`;

const BookCardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
`;


const BookCardImage = styled.div`
    flex: 0 0 200px;
    height: 250px;
    background-image: ${ props => `url(${props.image})` };
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
`;

const BookCardHeader = styled(Header)`
    margin-top: 0;
    margin-bottom: 5px;
`;

const BookCardFooter = styled.div`
    margin-top: 15px;
`;

export {
    BookCard,
    BookCardBody,
    BookCardImage,
    BookCardHeader,
    BookCardFooter,
};
