import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Function to send POST request
const createPost = async (newPost) => {
  const res = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage || 'Failed to create post');
  }
  return res.json();
};

// Custom Hook to handle post creation
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigate('/posts');
    },
    onError: (error) => {
      console.error('Error creating post:', error.message);
    },
  });
};
