import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { Link } from "react-router";
import { Box, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";

const PostsComponent = () => {
  const { posts, isLoading, error } = useContext(PostsContext);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading posts</h1>;
  if (!posts) return <h1>No posts available</h1>;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4"> Posts</Typography>
        <List style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <ListItemButton
                component={Link}
                to={`/post/${post.id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>

                {post.title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default PostsComponent;
