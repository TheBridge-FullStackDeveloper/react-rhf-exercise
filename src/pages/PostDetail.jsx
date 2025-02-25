import { useParams, Link } from 'react-router-dom';
import { usePost } from '../hooks/usePost';

const fetchPost = async (postId) => {
  const res = await fetch(`http://localhost:3000/posts/${postId}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
};

const PostDetail = () => {
  const { postId } = useParams();
  const { data: post, isLoading, error } = usePost(postId); //  i brought this over from  hoook folder usePost.js

  if (isLoading) return <p>Loading post details...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Email:</strong> {post.email}
      </p>
      <p>{post.body}</p>
      <Link to="/posts">← Back to Posts</Link>
    </div>
  );
};

export default PostDetail;
