import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { data: posts, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

  if (isLoading) return <p>Cargando posts...</p>;
  if (error) return <p>Error al cargar los posts.</p>;

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
