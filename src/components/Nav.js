function Nav() {
  return (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <div id="block-avo-branding">
        <a href="/" className="logo">
          <img
            className="logo-light"
            src="/img/logo-light.png"
            alt="Home"
          />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar"><i className="fas fa-bars"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://loozr-1.gitbook.io/docs/"
            >Documentation</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://medium.com/@officialloozr"
            >Blog</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Litepaper</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://discord.gg/rJZJGhRf" rel="noopener noreferrer"
              target="_blank"
            >Join Community</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Nav;