// src/pages/Home.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostExcerpt from '../components/PostExcerpt';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const status = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (posts.length === 0 && status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, posts.length, dispatch]);


    return (
        <div className="container">
            <h1>Latest Posts</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Failed to fetch posts.</p>}
            {status === 'succeeded' &&
                posts.map((post) => <PostExcerpt key={post.id} post={post} />)}
        </div>
    );

};

export default Home;
