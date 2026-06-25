import { useEffect, useState } from "react";
import { getPosts } from "../api/wordpress.js";
import PostCard from "../components/PostCard.jsx";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await getPosts();

        setPosts(postsData);
      } catch (err) {
        setError("Non è stato possibile caricare gli articoli.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <section className="blog-page">
      <header className="blog-header">
        <p className="eyebrow">Archivio</p>

        <h1 className="page-title">Blog</h1>

        <p className="page-text">
          Articoli recuperati dal sito WordPress tramite REST API.
        </p>
      </header>

      {loading && (
        <div className="blog-status">
          <p>Caricamento articoli...</p>
        </div>
      )}

      {!loading && error && (
        <div className="blog-status blog-status-error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="blog-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;