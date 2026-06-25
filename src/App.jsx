import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;