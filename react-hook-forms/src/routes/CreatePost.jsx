import { Box } from "@mui/material";
import FormComponent from "../components/Form/Index";

const CreatePost = () => {
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
      <FormComponent />
    </Box>
  );
};

export default CreatePost;
