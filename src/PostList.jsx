import { fetchData } from "./api/posts";
import { useQuery } from "@tanstack/react-query";

export function PostList() {
  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  return (
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
  );
}
