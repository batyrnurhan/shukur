import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/auth/token/login/', {
                username,
                password,
            });
            if (response.data.auth_token) {
                localStorage.setItem('authToken', response.data.auth_token);
                navigate('/profile'); // Redirect to the profile page
            } else {
                setError('Login failed: Invalid server response.');
            }
        } catch (err) {
            if (err.response) {
                setError('Login failed: ' + err.response.data.detail);
            } else if (err.request) {
                setError('Login failed: Server did not respond. Please try again later.');
            } else {
                setError('Login failed: An unexpected error occurred.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

export default Login;
