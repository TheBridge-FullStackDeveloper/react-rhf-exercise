import { useQuery } from "@tanstack/react-query";
import GetPostID from "../API/GetPostId";
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
    return (<>
    <h1>Post individual </h1>
    
      <Card sx={{ minWidth: 275, maxWidth:400, mx:"auto", position:"relative" }}>
      <CardContent>
      <Typography variant="body2" sx={{position: "absolute", right:20}}>
          Post ID: {data.id}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {data.author}
        </Typography>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{data.email}</Typography>
        <Typography variant="body2">
          {data.body}
        </Typography>
      </CardContent>
    </Card>
    </>
    );
  };
  
  export default PostId;
  