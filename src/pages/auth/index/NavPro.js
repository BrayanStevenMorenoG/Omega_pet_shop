import { Link } from "react-router-dom";

function NavPro() {
  return (

    <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Omega Pet Shop 🐾</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <Link className="btn btn-block btn-light"
                                to={'/listPro'}>
                              <i/> Volver
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
  </div>

  );
  }

export default NavPro;