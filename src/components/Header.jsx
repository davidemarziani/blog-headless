import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-logo" to="/">
          Headless Blog
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;