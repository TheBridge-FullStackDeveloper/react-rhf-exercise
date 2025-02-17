import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchPosts = async () => {
  const response = await fetch('http://localhost:5000/posts');
  return response.json();
};

const PostListPage = () => {
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts);

if (isLoading) return (
    <div className="container mx-auto px-4 py-8">
    <p className="text-gray-600">Loading posts...</p>
    </div>
);
if (error) return (
    <div className="container mx-auto px-4 py-8">
    <p className="text-red-600">Error loading posts: {error.message}</p>
    </div>
);

return (
<div className="container mx-auto px-4 py-8">
    <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold">Blog Posts</h1>
    <Link 
        to="/create-post" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Create New Post
    </Link>
    </div>
    <ul className="space-y-4">
    {data.map(post => (
        <li key={post.id} className="border-b pb-2">
        <Link 
            to={`/post/${post.id}`}
            className="text-blue-600 hover:text-blue-800 text-lg"
        >
            {post.title}
        </Link>
        </li>
    ))}
    </ul>
</div>
  );
};

export default PostListPage;
