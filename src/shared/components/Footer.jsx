import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0 text-white">
              Copyright &copy; SyP Refrigeracion AC 2025
            </div>
          </div>
          <div className="col-auto">
            {/* <a className="link-light small" href="#!">
              Privacy
            </a>
            <span className="text-white mx-1">&middot;</span>
            <a className="link-light small" href="#!">
              Terms
            </a> */}
            <span className="text-white mx-1">&middot;</span>
            <NavLink className="link-light small" to="/contact">
            Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
