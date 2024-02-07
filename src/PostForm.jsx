import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { SingleInput } from "./singleInput";
import { fetchData } from "./api/posts";
import { useQuery, useMutation } from "@tanstack/react-query";

export function PostForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const { mutate: create } = useMutation({
    mutationFn: (post) => {
      createPost(post);
    },
  });

  const onSubmit = (data) => {
    const newPost = { ...data, id: Date.now() };
    create(newPost);
    console.log("data", data);
    console.log("newPost", newPost);
  };

  return (
    <main className="flex flex-col items-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col min-w-[600px]"
      >
        <SingleInput
          control={control}
          register={register}
          type="text"
          name="title"
          isRequired
          error={errors.title}
        />

        <SingleInput
          control={control}
          register={register}
          type="text"
          name="author"
          isRequired
          error={errors.author}
        />

        <SingleInput
          control={control}
          register={register}
          type="text"
          name="body"
          isRequired
          error={errors.body}
        />

        <Button color="primary" type="submit">
          Create New Post
        </Button>
      </form>

      <div>
        <h1>New post created</h1>
        <p>{newPost.title}</p>
        <p>{newPost.author}</p>
        <p>{newPost.id}</p>
      </div>

      <div className="flex flex-col">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          postData?.map((singlePost, index) => {
            return (
              <div key={index}>
                <h2>{singlePost.title}</h2>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
