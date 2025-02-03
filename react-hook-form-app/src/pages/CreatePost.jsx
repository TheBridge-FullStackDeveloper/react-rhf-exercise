import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      navigate('/posts');
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Título</label>
        <input {...register('title', { required: 'El título es obligatorio' })} />
        {errors.title && <p>{errors.title.message}</p>}

        <label>Autor</label>
        <input {...register('author', { required: 'El autor es obligatorio' })} />
        {errors.author && <p>{errors.author.message}</p>}

        <label>Email</label>
        <input {...register('email', { required: 'El email es obligatorio', pattern: { value: /\S+@\S+\.\S+/, message: 'Email no válido' } })} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Contenido</label>
        <textarea {...register('body', { required: 'El contenido es obligatorio' })} />
        {errors.body && <p>{errors.body.message}</p>}

        <button type="submit">Crear Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
