import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Index } from "./Index";
import { PostList } from "./PostList";
import { PostForm } from "./PostForm";
import { SinglePost } from "./SinglePost";

export function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Index />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<PostForm />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Route>
    </Routes>
  );
}
