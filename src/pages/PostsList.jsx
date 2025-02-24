import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchPosts = async () => {
  const res = await fetch('http://localhost:3000/posts');
  return res.json();
};

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  console.log('Fetching posts...');
  console.log('Posts data:', posts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>by {post.author}</p>
          <Link to={`/post/${post.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
