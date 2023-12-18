// Reviews.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/accounts/reviews/');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Reviews</h1>
            <div>
                {reviews.map(review => (
                    <div key={review.id}>
                        <h2>{review.user.username}</h2>
                        <p>{review.review_text}</p>
                        <p>Posted on: {new Date(review.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
