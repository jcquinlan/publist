import React, { useState } from 'react';
import styled from 'styled-components';
import { FormCard, TextInput, Button } from '../styled';
import { login } from '../../utility/requestHelper';

const NarrowFormCard = styled(FormCard)`
    max-width: 600px;
`;

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const submitLogin = event => {
        event.preventDefault();

        login(username, password)
            .catch(errors => setErrors(errors));
    }

    return (
        <NarrowFormCard>
            <form onSubmit={submitLogin}>
                <TextInput type="text" placeholder="username" name="username" onChange={event => setUsername(event.target.value)} />
                <TextInput type="password" placeholder="password" name="password" onChange={event => setPassword(event.target.value)} />

                <Button onClick={submitLogin}>Submit</Button>
            </form>
        </NarrowFormCard>
    );
}


export default LoginForm;