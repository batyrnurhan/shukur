import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const authToken = localStorage.getItem('authToken'); // Retrieve the token
        if (!authToken) {
            console.error('No auth token found');
            return;
        }

        try {
            await axios.post(
                'http://localhost:8000/auth/token/logout/',
                {},
                { headers: { Authorization: `Token ${authToken}` } }
            );
            localStorage.removeItem('authToken'); // Clear the token from local storage
            navigate('/'); // Redirect to home page
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
