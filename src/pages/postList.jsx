import { useEffect, useState} from "react";
import { Typography, List, ListItem, ListItemText, Paper, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          throw new Error("Error al obtener los posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center" }}> {/* Centrar el título */}
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Lista de Posts
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <List>
          {posts.map((post) => (
            <Paper key={post.id} elevation={3} style={{ padding: "20px", marginBottom: "20px", borderRadius: "10px", backgroundColor: "#E3F2FD" }}>
              <ListItem component={Link} to={`/post/${post.id}`} button>
                <ListItemText
                  primary={<Typography variant="h6" component="span" fontWeight="bold">{post.title}</Typography>}
                  secondary={post.body}
                />
              </ListItem>
            </Paper>
          ))}
        </List>
        <Button component={Link} to="/" variant="contained" color="warning" sx={{ marginTop: '20px' }}>
          Volver a la HomePage
        </Button>
      </div>
    </Container>
  );
};




