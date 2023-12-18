import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // ... other fields like full_name, phone_number ...

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/auth/users/', {
                username,
                email,
                password,
                // ... other fields ...
            });
            // Handle success (e.g., navigate to login)
        } catch (error) {
            console.error('Registration error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            {/* Other input fields */}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
