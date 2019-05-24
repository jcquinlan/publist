import React, { useState } from 'react';
import { login } from '../../utility/requestHelper';

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
        <form onSubmit={submitLogin}>
            <input type="text" placeholder="username" name="username" onChange={event => setUsername(event.target.value)} />
            <input type="password" placeholder="password" name="password" onChange={event => setPassword(event.target.value)} />

            <button onClick={submitLogin}>Submit</button>
        </form>
    );
}


export default LoginForm;