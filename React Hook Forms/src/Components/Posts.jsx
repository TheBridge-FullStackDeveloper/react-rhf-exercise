import { useQuery } from "@tanstack/react-query";
import GetPosts from "../API/GetPosts";
import { Box } from "@mui/material";
import { Link } from "react-router";

const Posts = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getPosts"],
    queryFn: () => GetPosts(),
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>Ningun post encontrado</h1>;
  }
  console.log(data)
  return (
    <>
      <h1>Posts</h1>
      {data.map((post)=>{
        return <Box key={post.id}>
            <Link to={`/post/${post.id}`}>
            <p>{post.title}</p>
            </Link>
        </Box>
      })}
    </>
  );
};

export default Posts;
