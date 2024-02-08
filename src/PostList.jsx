import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api/posts";
import { Link } from "react-router-dom";

const randomAvatars = [
  "../public/images/avatar1.jpeg",
  "../public/images/avatar2.jpeg",
  "../public/images/avatar3.jpeg",
];

export function PostList() {
  const { data: postData, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
        margin: "auto",
        marginTop: 6,
      }}
    >
      {postData?.map((singlePost, index) => {
        // Generate a random index within the range of the array's length
        const randomIndex = Math.floor(Math.random() * randomAvatars.length);

        // Use the random index to access the corresponding element
        const randomAvatar = randomAvatars[randomIndex];

        return (
          <div key={index}>
            <ListItem alignItems="flex-start">
              <Link to={singlePost.id.toString()}>
                <ListItemAvatar>
                  <Avatar src={randomAvatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={singlePost.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {singlePost.author}
                      </Typography>
                      {` — ${singlePost.body}`}
                    </React.Fragment>
                  }
                />
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
}
