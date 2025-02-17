import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PostListPage from './PostListPage';
import PostDetailPage from './PostDetailPage';
import CreatePostPage from './CreatePostPage';
import Navbar from './Navbar';

function App() {
return (
    <Router>
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/post/:postId" element={<PostDetailPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            </Routes>
        </div>
        </main>
    </div>
    </Router>
  );
}

export default App;
