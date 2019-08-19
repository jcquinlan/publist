import React, { useState } from 'react';
import { register } from '../../utility/requestHelper';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const submitRegister = event => {
        event.preventDefault();

        register(username, email, password)
            .catch(newErrors => setErrors(errors));
    }

    return (
        <form>
            <input type="text" placeholder="username" name="username" onChange={event => setUsername(event.target.value)} />
            <input type="email" placeholder="email" name="email" onChange={event => setEmail(event.target.value)} />
            <input type="password" placeholder="password" name="password" onChange={event => setPassword(event.target.value)} />

            <button onClick={submitRegister}>Register</button>
        </form>
    );
}


export default LoginForm;