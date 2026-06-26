import { Link } from "react-router";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2 className="post-title">
        <Link
          to={`/blog/${post.slug}`}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </h2>

      <div
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />

      <Link className="post-read-more" to={`/blog/${post.slug}`}>
        Leggi articolo
      </Link>
    </article>
  );
}

export default PostCard;