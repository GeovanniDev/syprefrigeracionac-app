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
                    <NavLink className="dropdown-item" to="/services/1">
                      INSTALACIONES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/services/2">
                      MANTENIMIENTO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/services/3">
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
                    <NavLink className="dropdown-item" to="/equipment/1">
                      EQUIPOS A/C
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/thermo/2">
                      THERMOS
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
                  PROYECTOS ESPECIALES
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownBlog"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/special-projects/1">
                      CONTROLES PERSONALIZADOS
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/bases/1">
                  BASES
                    </NavLink>
                    
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
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
