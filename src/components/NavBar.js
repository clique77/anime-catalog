import { Link } from "react-router-dom";
import "./sass/navbar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="name">
        <h1 className="anime">Anime</h1>
        <h1>Catalog</h1>
      </div>
      <div className="other-info">
        <Link to="/about">About</Link>
        <Link to="/home">Search</Link>
      </div>
    </div>
  );
};

export default NavBar;
