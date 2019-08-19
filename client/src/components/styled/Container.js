import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 0 15px;
    margin: 0 auto;
`;

const NarrowContainer = styled(Container)`
    max-width: 600px;
`;

export { Container, NarrowContainer };