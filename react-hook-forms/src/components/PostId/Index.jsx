import { useContext } from "react";
import { Link, useParams } from "react-router";
import { PostsContext } from "../../context/PostsContext";
import { Box, Button, Typography } from "@mui/material";

 const PostIdComponent = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Typography variant="h4">{post.title}</Typography>
    <Typography variant="body1">{post.body}</Typography>
    <Typography variant="body1">Author: {post.author}</Typography>
    <Typography variant="body1">Email: {post.email}</Typography>
    <Button variant="contained" href="/posts">Back to Posts</Button>
  </Box>
  );
};

export default PostIdComponent;
