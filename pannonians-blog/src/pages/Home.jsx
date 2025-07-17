// src/pages/Home.jsx
import { useEffect } from 'react';
// čitanje podataka iz store-a
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostExcerpt from '../components/PostExcerpt';

const Home = () => {
    const dispatch = useDispatch(); // za slanje fetchPosts
    const posts = useSelector((state) => state.posts.items);
    const status = useSelector((state) => state.posts.status);

    // fetch se ne dešava svaki put kad se Home učita
    useEffect(() => {
        if (posts.length === 0 && status === 'idle') {
            dispatch(fetchPosts()); // preuzimam postove
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
