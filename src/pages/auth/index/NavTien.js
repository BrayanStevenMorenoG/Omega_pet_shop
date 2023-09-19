import Cookies   from 'universal-cookie/es6';

function NavTien() {

    const cookies = new Cookies();

    function cerrarSesion(){
        cookies.remove('id', {path: "/"});
        cookies.remove('nombreTien', {path: "/"});
        cookies.remove('direccion', {path: "/"});
        cookies.remove('telefono', {path: "/"});
        cookies.remove('propietario', {path: "/"});
        alert(`Hasta luego`)
        window.location.href="./"
      }

  return (

    <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Omega Pet Shop 🐾</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <button className="btn btn-block btn-light"
                                  onClick={e=>cerrarSesion()}>
                              <i/> cerrar sesion
                          </button>

                      </li>
                  </ul>
              </div>
          </nav>

  </div>

  );
  }

export default NavTien;