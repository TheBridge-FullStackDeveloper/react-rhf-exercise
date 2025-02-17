import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

const fetchPost = async (postId) => {
  const response = await fetch(`http://localhost:5000/posts/${postId}`);
  return response.json();
};

const PostDetailPage = () => {
const { postId } = useParams();
const { data, isLoading, error } = useQuery(['post', postId], () => fetchPost(postId));

if (isLoading) return (
    <div className="container mx-auto px-4 py-8">
    <p className="text-gray-600">Loading post details...</p>
    </div>
);

if (error) return (
    <div className="container mx-auto px-4 py-8">
    <p className="text-red-600">Error loading post details. Please try again later.</p>
    </div>
);

return (
    <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">{data.body}</p>
        <div className="border-t pt-4">
        <p className="text-gray-600 mb-2">Author: {data.author}</p>
        <p className="text-gray-600 mb-4">Email: {data.email}</p>
        </div>
        <Link 
        to="/posts" 
        className="inline-block text-blue-600 hover:text-blue-800 hover:underline"
        >
        Back to Posts List
        </Link>
    </div>
    </div>
  );
};

export default PostDetailPage;

