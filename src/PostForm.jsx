import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { SingleInput } from "./SingleInput";
import { fetchData, createPost } from "./api/posts";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

export function PostForm() {
  const [post, setPost] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: "posts",
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    setPost(data);
  };

  if (post.title) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Alert sx={{ mb: 2 }}>Post succesfully submitted.</Alert>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          <Link to="/posts">View all posts</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center w-full mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col min-w-[600px] gap-3"
      >
        <SingleInput
          control={control}
          name="title"
          patternValue=".*"
          error={errors.title}
        />

        <SingleInput
          control={control}
          name="author"
          patternValue=".*"
          error={errors.author}
        />

        <SingleInput
          control={control}
          name="email"
          patternValue="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          error={errors.email}
        />

        <SingleInput
          control={control}
          name="body"
          patternValue=".*"
          error={errors.body}
        />

        <div className="flex justify-center">
          <Button color="primary" type="submit" className="w-[300px]">
            Create New Post
          </Button>
        </div>
      </form>
    </main>
  );
}
