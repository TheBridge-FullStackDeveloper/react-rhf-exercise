import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PostCreate from "../API/PostCreate";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import "../Style/Form.css";
import "../Style/Global.css";
import { Box } from "@mui/material";

const CreatePost = () => {

  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (data) => {
      PostCreate(data);
    },
    onSuccess: () => {
      console.log("Tu post se ha creado correctamente");
      navigate("/posts")
    },
    onError: () => {
      console.error("Ha habido un error creando el post");
    },
  });

  const onSubmit = (data) => mutate(data);

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <h1>Create Post</h1>
        <div className="containerInputs">
          <TextField
            className="Inputs"
            label="Title"
            variant="outlined"
            {...register("title", {
              required: "Te falta el Titulo",
              maxLength: 20,
            })}
          />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>
        <div className="containerInputs">
          <TextField
            className="Inputs"
            label="Author"
            variant="outlined"
            {...register("author", {
              required: "Te falta el Titulo",
              maxLength: 20,
            })}
          />
          {errors.author && <p className="error">{errors.author.message}</p>}
        </div>
        <div className="containerInputs">
          <TextField
            className="Inputs"
            type="email"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: "Te falta el Titulo",
              maxLength: 20,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "El Email no cumple con los requisitos minimos",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="containerInputs">
          <TextField
            className="Inputs"
            label="Body"
            variant="outlined"
            {...register("body", {
              required: "Te falta el Body del post",
              maxLength: 200,
            })}
          />
          {errors.body && <p className="error">{errors.body.message}</p>}
        </div>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </>
  );
};

export default CreatePost;
