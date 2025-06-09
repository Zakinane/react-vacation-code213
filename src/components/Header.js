import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="Country" to="/dest/italy">
        Venice
      </Link>
      <Link className="Country" to="/dest/netherlands">
        Netherlands
      </Link>
      <Link className="Country" to="/dest/australia">
        Australia
      </Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}

export default Header;
