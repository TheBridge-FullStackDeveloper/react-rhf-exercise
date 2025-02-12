import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
};