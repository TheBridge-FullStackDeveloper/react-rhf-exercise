import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { SingleInput } from "./singleInput";
import { fetchData } from "./api/posts";
import { useQuery } from "@tanstack/react-query";

export function PostForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);

  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  console.log("PostData", postData);
  console.log("is Loading", isLoading);

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
