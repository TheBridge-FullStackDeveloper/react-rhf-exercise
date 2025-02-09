import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostsContext } from "../context/PostsContext";

const CreatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { posts, setPosts} = useContext(PostsContext);

  const onSubmit = (data) => {
    const newPost = { id: (posts?.length || 0) + 1, ...data };
    setPosts([...(posts || []), newPost]);
  }

  return (
    <div>
      <h1>✍🏽 Create Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title", {required: "This field is required"})}/>
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>Author</label>
          <input {...register("author", {required: "This field is required"})}/>
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email", {required: "This field is required", pattern: {value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm , message:"El email no cumple" }})}/>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Body</label>
          <input {...register("body", {required: "This field is required"})}/>
          {errors.body && <p>{errors.body.message}</p>}
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
