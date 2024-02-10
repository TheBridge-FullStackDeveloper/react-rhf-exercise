import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { PostsList } from "./pages/postList";
import { CreatePost } from "./pages/createPost";
import { DetailPost } from "./pages/detailPost";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:postId" element={<DetailPost />} />
      </Routes>
      </div>
  );
}

export default App;
