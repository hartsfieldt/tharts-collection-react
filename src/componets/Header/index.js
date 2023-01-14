import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* <nav
        className="navbar is-size-2 has-background-link-light is-flex-mobile"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link class="navbar-item has-text-weight-bold">
              Teresa Hartsfield
            </Link>
            <Link
              href="./assets/THartsfield Resume.pdf"
              download
              target="Resume"
              class="navbar-item is-size-4"
            >
              Resume
            </Link>
            <div className="navbar-item has-dropdown is-hoverable is-size-4">
              <Link className="navbar-link">More</Link>
              <div className="navbar-dropdown p-2 mr-2 is-size-4">
                <Link
                  href="https://www.facebook.com/teresa.hartsfield.5"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook navbar-item"></i>
                </Link>
                <hr className="navbar-divider" />
                <Link
                  href="https://www.instagram.com/hartsfieldt/?hl=en"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram navbar-item"></i>
                </Link>
                <hr className="navbar-divider" />
                <Link
                  href="https://www.linkedin.com/in/teresahartsfield/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin navbar-item"></i>
                </Link>
                <hr className="navbar-divider" />
                <Link
                  href="https://github.com/hartsfieldt"
                  target="Github"
                  className="navbar-item is-size-4"
                >
                  Git Hub
                </Link>
                <hr className="navbar-divider" />
                <Link
                  href="mailto:hartsfieldt@gmail.com"
                  target="email"
                  className="navbar-item is-size-4"
                >
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

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
