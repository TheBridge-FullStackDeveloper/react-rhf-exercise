import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button, Paper } from "@mui/material";

export const DetailPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        if (!response.ok) {
          throw new Error("Error al obtener el detalle del post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div style={{ padding: "20px", marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Detalle del Post
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#E3F2FD" }}>
        {post ? (
          <div>
            <Typography variant="h5" gutterBottom>
              Autor: {post.author}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Título: {post.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Contenido: {post.body}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1" gutterBottom>
            Cargando...
          </Typography>
        )}
        </Paper>
        <Button component={Link} to="/posts" variant="contained" color="primary" sx={{ marginTop: "20px" }}>
          Volver a la lista de posts
        </Button>
    </div>
  );
};
