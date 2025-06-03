import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="Country" to="/">
        Venice
      </Link>
      <Link className="Country" to="/amsterdam">
        Amsterdam
      </Link>
      <Link className="Country" to="/sydney">
        Sydney
      </Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}

export default Header;
