import { useQuery } from '@tanstack/react-query';

const fetchPost = async (postId) => {
  const res = await fetch(`http://localhost:3000/posts/${postId}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
};

export const usePost = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });
};
