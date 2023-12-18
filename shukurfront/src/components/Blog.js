// Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogs/blogposts/');
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts', error);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <div>
                {blogPosts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.text }} />
                        {post.image1 && <img src={post.image1} alt={post.title} />}
                        <p>Posted on: {new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
