
import NavBar from "../components/Navbar";
import Home from "../routes/Home";
import Posts from "../routes/Posts";
import PostId from "../routes/PostId";
import CreatePost from "../routes/CreatePost";

import { PostsProvider } from "../context/PostsContext";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <PostsProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<PostId />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </PostsProvider>
  );
};

export default App;
