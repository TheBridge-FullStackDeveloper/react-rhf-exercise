import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import CreatePost from "./Components/ CreatePost";
import PostId from "./Components/PostId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="" element={<h1>Blog The Bridge</h1>} />
          <Route path="posts" element={<Posts />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="post/:id" element={<PostId />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
