import { Link } from 'react-router-dom';

const PostExcerpt = ({ post }) => {
    const shortBody = post.body.length > 30 ? post.body.slice(0, 30) + '...' : post.body;

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{shortBody} <Link to={`/posts/${post.id}`}>read more</Link></p>
        </div>

    );
};

export default PostExcerpt;
