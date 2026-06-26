import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import PostDetail from "./pages/PostDetail.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;