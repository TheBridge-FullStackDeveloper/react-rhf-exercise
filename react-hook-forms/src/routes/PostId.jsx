import { Box } from "@mui/material";
import PostIdComponent from "../components/PostId/Index";

const PostId = () => {
  
  
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexGrow: 1,
      gap: 2,
      p: 2,
    }}>
      <PostIdComponent/>
    </Box>
  )
}

export default PostId;
