import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../api';

const PostDetail = () => {
  const { postId } = useParams();
  const { data: post, isLoading, error } = useQuery({ queryKey: ['post', postId], queryFn: () => fetchPostById(postId) });

  if (isLoading) return <p>Cargando post...</p>;
  if (error) return <p>Error al cargar el post.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>Autor:</strong> {post.author}</p>
      <p><strong>Email:</strong> {post.email}</p>
      <p>{post.body}</p>
      <Link to="/posts">Volver a la lista de posts</Link>
    </div>
  );
};

export default PostDetail;
