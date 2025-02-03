import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import GetPosts from "../API/GetPosts";
import { Box } from "@mui/material";
import { Link } from "react-router";
import ListPost from "./ListPost";

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
  return (
    <>
      <h1>Posts</h1>
      <List
        className="Lista"
        sx={{
          width: "100%",
          maxWidth: 300,
          bgcolor: "background.paper",
          mx: "auto"
        }}
      >
        {data.map((post) => {
          return (
            <Box key={post.id}>
              <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
                <ListPost post={post} />
              </Link>
            </Box>
          );
        })}
      </List>
    </>
  );
};

export default Posts;
