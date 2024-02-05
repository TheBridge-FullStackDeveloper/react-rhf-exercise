import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";

export function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center">
        <input type="text" placeholder="title " {...register("title", {})} />
        <input type="text" placeholder="author" {...register("author", {})} />
        <input
          type="email"
          placeholder="email"
          {...register("test", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "This is not a valid email",
            },
          })}
        />

        <input type="text" placeholder="body" {...register("body", {})} />

        <Button color="primary">Create New Post</Button>
      </div>
    </form>
  );
}
