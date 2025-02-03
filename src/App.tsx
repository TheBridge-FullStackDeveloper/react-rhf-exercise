import { QueryClient, QueryClientProvider } from "react-query"
import { Nav } from "./components/Nav"
import { ThemeProvider } from "./components/ui/theme-provider"
import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router"
import { CreatePostForm } from "./components/CreatePost"
import { ViewAllPosts } from "./components/ViewAllPosts"
import { SearchPosts } from "./components/SearchPost"
import ViewSinglePost from "./components/ViewSinglePost"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreatePostForm />} />
            <Route path="/posts" element={<ViewAllPosts />} />
            <Route path="/posts/:id" element={<ViewSinglePost />} />
            <Route path="/search" element={<SearchPosts />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App