import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      console.log("Post creado con éxito");
      // Aquí podrías redirigir al usuario a otra página o realizar cualquier otra acción necesaria
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "80px",
        textAlign: "center",
        minHeight: "calc(100vh - 80px)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Crear un nuevo post
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: "#E3F2FD" }}>
              <CardContent>
                <TextField
                  {...register("title", { required: true })}
                  label="Título"
                  fullWidth
                  margin="normal"
                  error={errors.title ? true : false}
                  helperText={errors.title && "Este campo es requerido"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: "#E3F2FD" }}>
              <CardContent>
                <TextField
                  {...register("author", { required: true })}
                  label="Autor"
                  fullWidth
                  margin="normal"
                  error={errors.author ? true : false}
                  helperText={errors.author && "Este campo es requerido"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#E3F2FD" }}>
              <CardContent>
                <TextField
                  {...register("email", { required: true })}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={errors.email ? true : false}
                  helperText={errors.email && "Este campo es requerido"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#E3F2FD" }}>
              <CardContent>
                <TextField
                  {...register("body", { required: true })}
                  label="Contenido"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  error={errors.body ? true : false}
                  helperText={errors.body && "Este campo es requerido"}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Crear Post
        </Button>
      </form>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="warning"
        sx={{ marginTop: "20px" }}
      >
        Volver a la HomePage
      </Button>
    </Container>
  );
};
