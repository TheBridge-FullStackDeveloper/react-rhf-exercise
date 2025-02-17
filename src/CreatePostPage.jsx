import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const createPost = async (postData) => {
const response = await fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
});
if (!response.ok) {
    throw new Error('Failed to create post');
}
return response.json();
};

const CreatePostPage = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
    navigate('/posts');
    },
});

const navigate = useNavigate();

const onSubmit = (data) => {
    mutation.mutate(data);
};

return (
    <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
            {...register('title', {
            required: 'Title is required',
            minLength: {
                value: 5,
                message: 'Title must be at least 5 characters',
            },
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        </div>

        <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
            {...register('author', {
            required: 'Author is required',
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
        )}
        </div>

        <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
            {...register('email', {
            required: 'Email is required',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
            },
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        </div>

        <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
            {...register('body', {
            required: 'Body is required',
            minLength: {
                value: 10,
                message: 'Body must be at least 10 characters',
            },
            })}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.body && (
            <p className="text-red-500 text-sm">{errors.body.message}</p>
        )}
        </div>

        <div className="flex items-center justify-between">
        <button
            type="submit"
            disabled={mutation.isPending}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400"
        >
            {mutation.isPending ? 'Creating...' : 'Create Post'}
        </button>
        {mutation.isError && (
            <p className="text-red-500">Error creating post. Please try again.</p>
        )}
        </div>
    </form>
    </div>
);
};

export default CreatePostPage;
