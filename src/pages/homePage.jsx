import { Outlet } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";

export const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "80px",
        textAlign: "center",
        backgroundColor: "#E3F2FD",
        minHeight: "calc(100vh - 80px)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenido a nuestra plataforma de creación de posts
      </Typography>
      <Paper
        sx={{
          backgroundColor: "#1976D2",
          color: "#E3F2FD",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="body1" align="justify" paragraph>
          En nuestra plataforma, te ofrecemos una experiencia completa para
          compartir tus pensamientos, historias y conocimientos con el mundo.
          Con una interfaz intuitiva y funcionalidades avanzadas, nuestra
          aplicación te permite crear, explorar y compartir una variedad de
          posts de manera sencilla y efectiva.
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          En la página de inicio, encontrarás una introducción a nuestra
          comunidad y una descripción general de lo que puedes esperar. Desde
          ahí, podrás navegar fácilmente a las distintas secciones de la
          aplicación utilizando nuestro navbar, que te proporciona acceso rápido
          a las páginas de listado de posts y creación de posts.
        </Typography>
      </Paper>
      <Outlet />
    </Container>
  );
};
