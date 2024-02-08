import { useParams } from "react-router-dom";
import { CircularColor } from "./CircularColor";
import { fetchData } from "./api/posts";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export function SinglePost() {
  const { id } = useParams();

  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const post = postData?.find((postItem) => postItem.id === id);

  if (isLoading) {
    return <CircularColor />;
  }

  if (!post) {
    return <p>Beer not found</p>;
  }

  return (
    <Card className="max-w-[400px] h-[400px] mx-auto mt-10">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-medium font-semibold leading-none text-default-600">
              {post.author}
            </h4>
            <h5 className="text-medium tracking-tight text-default-400">
              @{post.email}
            </h5>
          </div>
        </div>
      </CardHeader>

      <CardBody className="px-3 py-0 text-medium text-default-400">
        <p>{post.body}</p>
        <span className="pt-2">
          {`#${post.title}`}
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
    </Card>
  );
}
