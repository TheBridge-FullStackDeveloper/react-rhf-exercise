import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Homepage } from "./pages/Homepage";
import { Posts } from "./pages/Posts";
import { NewPost } from "./pages/NewPost";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create-post" element={<NewPost />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
