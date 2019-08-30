import React, { useState } from 'react';
import { NarrowContainer, Flex, Title } from '../components/styled';
import { RegisterForm } from '../components/forms';
import ErrorList from '../components/ErrorList';

const RegisterPage = (props) => {
    const [errors, setErrors] = useState({});

    return (
        <NarrowContainer>
            <Flex flexDirection="column" alignItems="center">
                <Title>Register</Title>
                <RegisterForm handleErrors={setErrors} />
                <ErrorList errors={errors} />
            </Flex>
        </NarrowContainer>
    );
}

export default RegisterPage;