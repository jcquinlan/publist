import React from 'react';
import styled from 'styled-components';
import { Flex, TextInput, Button } from './styled';

const InputButton = styled(Button)`
    width: 100px;
    height: auto;
    border-radius: 0px;
`;

const IconInput = ({ onClick, ...rest }) => {
    return (
        <Flex>
            <TextInput {...rest} />
            <InputButton>Search</InputButton>
        </Flex>
    )
}

export default IconInput;