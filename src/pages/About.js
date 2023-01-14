const About = () => {
  return (
    <>
      <header>
        <nav
          className="navbar is-size-2 has-background-link-light is-flex-mobile"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a class="navbar-item has-text-weight-bold">Teresa Hartsfield</a>
            </div>
            <a
              href="./assets/THartsfield Resume.pdf"
              download
              target="Resume"
              class="navbar-item is-size-4"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default About;
