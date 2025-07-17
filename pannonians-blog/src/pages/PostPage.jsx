// src/pages/PostPage.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!res.ok) throw new Error('Failed to fetch post');
                const data = await res.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <Link to="/" className="back-link">← Back to Home</Link>
            <div className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>

    );
};

export default PostPage;
