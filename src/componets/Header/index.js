import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Teresa Hartsfield
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" href="#">
                About <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
