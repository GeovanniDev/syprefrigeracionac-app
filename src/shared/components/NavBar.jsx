import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <NavLink className="navbar-brand" to="/home">
            SYP REFRIGERACIÓN Y A/C
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownBlog"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICIOS
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownBlog"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/Services/1">
                      INSTALACIONES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Services/2">
                      MANTENIMIENTO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Services/3">
                      REFACCIONES
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownBlog"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EQUIPOS
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownBlog"
                >
                  <li>
                    <a className="dropdown-item" href="blog-home.html">
                      EQUIPOS A/C
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      THERMOS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownBlog"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROYECTOS ESPECIALES
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownBlog"
                >
                  <li>
                    <a className="dropdown-item" href="blog-home.html">
                      CONTROLES AVAZANDOS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      BASES
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  CONTACTO
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
