import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const ListPost = ({post}) => {

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={post.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                {post.author}
              </Typography>
              {` — ${post.body}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      </>
  );
};

export default ListPost;
