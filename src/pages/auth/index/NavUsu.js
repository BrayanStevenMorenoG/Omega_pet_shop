import Cookies from 'universal-cookie/es6';
import { useNavigate } from 'react-router-dom';

function NavUsu() {

    const navigate = useNavigate();
    const cookies = new Cookies();

    function cerrarSesion() {
        cookies.remove('id', { path: "/" });
        cookies.remove('tipodoc', { path: "/" });
        cookies.remove('numdoc', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('apellido', { path: "/" });
        cookies.remove('fnacimiento', { path: "/" });
        cookies.remove('email', { path: "/" });
        alert(`Hasta luego`);
        navigate("/");
      }

return (

    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Omega Pet Shop 🐾</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-block btn-light" onClick={e => cerrarSesion()}>
                <i /> cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </nav>

  </div>

  );
  }

export default NavUsu;