import { useForm } from 'react-hook-form';
import { useCreatePost } from '../hooks/useCreatePost';
import '../styles/CreatePost.css';

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useCreatePost();

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="create-post-form">
        <input
          {...register('title', { required: 'Title is required' })}
          placeholder="Title"
        />
        {errors.title && <p>{errors.title.message}</p>}

        <input
          {...register('author', { required: 'Author is required' })}
          placeholder="Author"
        />
        {errors.author && <p>{errors.author.message}</p>}

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <textarea
          {...register('body', { required: 'Body is required' })}
          placeholder="Post content"
        ></textarea>
        {errors.body && <p>{errors.body.message}</p>}

        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {mutation.error && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default CreatePost;
