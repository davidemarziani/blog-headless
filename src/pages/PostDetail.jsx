import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getPostBySlug } from "../api/wordpress.js";
import "./PostDetail.css";

function PostDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getPostBySlug(slug);

        setPost(postData);
      } catch (err) {
        setError("Non è stato possibile caricare l'articolo.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <section className="post-detail-page">
        <p>Caricamento articolo...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="post-detail-page">
        <p>{error}</p>
        <Link to="/blog">Torna al blog</Link>
      </section>
    );
  }

  return (
    <article className="post-detail-page">
      <Link className="back-link" to="/blog">
        ← Torna al blog
      </Link>

      <h1
        className="post-detail-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <div
        className="post-detail-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}

export default PostDetail;