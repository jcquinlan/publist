import styled from 'styled-components';

const Flex = styled.div`
    display: ${ props => props.display || 'flex' };
    flex-direction: ${ props => props.flexDirection || 'row' };
    align-items: ${ props => props.alignItems };
    justify-content: ${ props => props.justifyContent };
    flex-grow: ${ props => props.flexGrow };
    flex-shrink: ${ props => props.flexShrink };
`;

export default Flex;
