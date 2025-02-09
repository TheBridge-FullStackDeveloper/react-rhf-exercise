import { useContext } from 'react'
import { Link, useParams } from 'react-router';
import { PostsContext } from '../context/PostsContext';

const PostId = () => {
  const {postId} = useParams();
  const { posts } = useContext(PostsContext);
  const post = posts.find(post => post.id === parseInt(postId));

  if(!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.author}</p>
      <p>Email: {post.email}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  )
}

export default PostId;
