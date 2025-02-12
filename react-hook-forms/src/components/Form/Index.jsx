import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { PostsContext } from "../../context/PostsContext";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TitleIcon from '@mui/icons-material/Title';
import { RssFeed } from "@mui/icons-material";


const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: {
    title: "",
    author: "",
    email: "",
    body: "",
  } });
  const { posts, setPosts } = useContext(PostsContext);

  const onSubmit = (data) => {
    const newPost = { id: (posts?.length || 0) + 1, ...data };
    setPosts([...(posts || []), newPost]);
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}
    >
      <Typography variant="h4"> <CreateIcon/> Create Post</Typography>

      <Box
        component="form"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleSubmit(onSubmit)}
      > 
        <Controller
          name="title"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={<TitleIcon/>}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        /> 

        <Controller
          name="author"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={<AccountCircleIcon/>}
              error={!!errors.author}
              helperText={errors.author?.message}
            />
          )}
        /> 

        <Controller 
          name="email"
          control={control}
          rules={{
            required: "This field is required",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
              message: "El email no cumple",
            },
          }}
          render={({ field }) => (
            <TextField 
              {...field}
              label={<EmailIcon/>}
              error={!!errors.email}
              helperText={errors.email?.message}
            /> 
          )}
        /> 

        <Controller
          name="body"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              label={<MessageIcon/>}
              error={!!errors.body}
              helperText={errors.body?.message}
              fullWidth={true}
            />
          )}
        /> 

        <Button variant="contained" type="submit">
          Create Post
        </Button>
      </Box>
    </Box>
  );
};

export default FormComponent;
