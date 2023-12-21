import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        fetchResults(query);
    }, [location]);

    const fetchResults = async (query) => {
        try {
            const response = await axios.get(`http://your-backend-url/search/?query=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    return (
        <div>
            <h1>Search Results</h1>
            {/* Render the results here */}
            {/* Example: Displaying user results */}
            {results.users && results.users.map(user => (
                <div key={user.id}>
                    {user.username}
                </div>
            ))}
            {/* Handle other model results similarly */}
        </div>
    );
}

export default SearchResults;
