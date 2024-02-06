import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
