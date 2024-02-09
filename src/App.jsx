import { Routes, Route } from "react-router-dom";
import { NavBar } from "./pages/Navbar";
import { Index } from "./pages/Index";
import { PostList } from "./pages/PostList";
import { PostForm } from "./pages/PostForm";
import { SinglePost } from "./pages/SinglePost";

export function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Index />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<PostForm />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Route>
    </Routes>
  );
}
