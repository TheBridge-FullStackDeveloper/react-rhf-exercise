import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api/posts";

const columns = [
  {
    field: "title",
    headerName: "Title",
    width: 250,
    editable: false,
  },
  {
    field: "author",
    headerName: "Author",
    width: 250,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: false,
  },
  {
    field: "body",
    headerName: "Body",
    width: 400,
    editable: false,
  },
];

export function Index() {
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
    <div className="m-5">
      <div className="m-6">
        <p>This is a web application of a blog</p>
        <p>These are the actions you can do:</p>
        <ul className="m-6">
          <li className="list-disc">View posts</li>
          <li className="list-disc">View the post detail</li>
          <li className="list-disc">Create a new post</li>
        </ul>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          className=".MuiDataGrid-withBorderColor"
          autoHeight
          rows={postData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoPageSize
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
