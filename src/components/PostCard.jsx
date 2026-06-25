import "./PostCard.css";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2
        className="post-title"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <div
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </article>
  );
}

export default PostCard;