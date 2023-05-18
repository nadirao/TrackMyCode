import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src="https://i.imgur.com/HXi8zz0.png" title="source: imgur.com" className="home-logo" alt="home-logo"/>
      </Link>
      <nav className="navbar">
        <Link to="/search">
          <div>Search</div>
        </Link>
        <form
          className="cwsearchbar"
          action="https://www.codewars.com/kata/search"
        >
          <input placeholder="search codewars" type="text" name="q" />
          <button>search</button>
        </form>
      </nav>
    </header>
  );
}
