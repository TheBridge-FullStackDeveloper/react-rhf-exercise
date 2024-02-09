import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../api/posts";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const { mutate: create } = useMutation({
    mutationFn: (post) => {
      createPost(post);
    },
  });

  const onSubmit = (data) => {
    const newPost = {
      ...data,
      id: Date.now(),
    };
      
  create(newPost)
  reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col space-y-4">
      <input
        {...register("title", { required: "This field is required" })}
        type="text"
        placeholder="Title"
        class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      {errors.title && (
        <span class="text-white font-semibold">{errors.title.message}</span>
      )}
      <input
        {...register("author", { required: "This field is required" })}
        type="text"
        placeholder="Author"
        class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      {errors.author && (
        <span class="text-white font-semibold">{errors.author.message}</span>
      )}
      <input
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      {errors.email && (
        <span class="text-white font-semibold">{errors.email.message}</span>
      )}
      <textarea
        {...register("content", {
          required: "This field is required",
          minLength: { value: 10, message: "Minimum length should be 10" },
          maxLength: {
            value: 150,
            message: "Maximum length should be 150",
          },
        })}
        placeholder="Content"
        class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      {errors.content && (
        <span class="text-white font-semibold">{errors.content.message}</span>
      )}
      <button
        type="submit"
        class="bg-white text-indigo-500 py-2 px-6 rounded-lg hover:bg-transparent hover:text-white transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
