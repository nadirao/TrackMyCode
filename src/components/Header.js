import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src="https://i.imgur.com/HXi8zz0.png" title="source: imgur.com" />
      </Link>
      <nav className="navbar">
        <Link to="/search">
          <div>Search</div>
        </Link>
        <form
          className="cwsearchbar"
          action="https://www.codewars.com/kata/search"
        >
          <a href="#"></a>
          <input placeholder="search codewars" type="text" name="q" />
        </form>
      </nav>
    </header>
  );
}
