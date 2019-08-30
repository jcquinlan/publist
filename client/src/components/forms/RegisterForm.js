import React, { useState } from 'react';
import { FormCard, TextInput, Button } from '../styled';
import { register } from '../../utility/requestHelper';

const RegisterForm = ({ handleErrors }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitRegister = event => {
        event.preventDefault();

        register(username, email, password)
            .catch(newErrors => handleErrors(newErrors));
    }

    return (
        <FormCard>
            <form>
                <TextInput type="text" placeholder="username" name="username" onChange={event => setUsername(event.target.value)} />
                <TextInput type="email" placeholder="email" name="email" onChange={event => setEmail(event.target.value)} />
                <TextInput type="password" placeholder="password" name="password" onChange={event => setPassword(event.target.value)} />

                <Button onClick={submitRegister}>Register</Button>
            </form>
        </FormCard>
    );
}


export default RegisterForm;