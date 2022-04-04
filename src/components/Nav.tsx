/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  let showLoozrVrze = true;
  const location = useLocation();

  if (location.pathname !== '/') {
    showLoozrVrze = false;
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div id="block-avo-branding">
          <Link to="/" className="logo">
            <img className="logo-light" src="/img/logo-light.png" alt="Home" />
          </Link>
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
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://loozr-1.gitbook.io/docs/">
                LiteDoc
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://medium.com/@officialloozr">
                Blog
              </a>
            </li>
            {showLoozrVrze ? (
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() =>
                    document
                      .getElementById("lzrVerz")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  LoozrVrze
                </a>
              </li>
            ) : null}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://discord.gg/mm5mV8PHpq"
                rel="noopener noreferrer"
                target="_blank"
              >
                Join Telegram
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-btn mr-0" to="/artistes/ecosystem">
                View Ecosystem
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;