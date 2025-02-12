import PostsComponent from "../components/PostsComponent/Index";
import { Box } from "@mui/material";



const Posts = () => {
   
  
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        height:"90vh"
      }}>

      <PostsComponent/>

      </Box>
      
    );
  };
  
  export default Posts;