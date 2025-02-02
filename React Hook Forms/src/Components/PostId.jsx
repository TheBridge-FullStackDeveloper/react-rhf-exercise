import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import GetPostID from "../API/GetPostId";
import { useParams } from "react-router";

const PostId = () => {
    const { id } = useParams();

    const { isLoading, data, error } = useQuery({
        queryKey: ["GetPostID", id],
        queryFn: () => GetPostID(id),
      });

      if (isLoading) {
        return <h1>Cargando...</h1>;
      }
      if (error) {
        return <h1>Ningun post encontrado</h1>;
      }
    return (
      <Box>
        <h1>{data.title}</h1>
      </Box>
    );
  };
  
  export default PostId;
  