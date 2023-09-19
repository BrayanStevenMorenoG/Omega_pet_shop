import './pages/auth/App.css'
import Cookies from 'universal-cookie';
import React, { useEffect} from "react";

function App() {

    const cookies = new Cookies();    

    useEffect(() =>{ 
        if (cookies.get("email")){      
          window.location.href='/menuUsu';
        } else if (cookies.get("nombreTien")){
            window.location.href='/listPro';
        }
      })

    return (

      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Omega Pet Shop 🐾</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Iniciar Sesión
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="./loginTien">Tienda</a>
                        <a className="dropdown-item" href="./loginUsu">Usuario</a>
                    </div>
                </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/createTien">Crear Tienda</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./createUsu">Crear Usuario</a>
                      </li>
                  </ul>
              </div>
          </nav>
          <br/><br/>
          <div className="container mt-4 text-center">
        <h1><b>Bienvenido a Omega Pet Shop</b></h1>
        <br/>
        <p>
            Omega Pet Shop es tu destino para todas tus necesidades relacionadas con mascotas.
        </p>
        <p>
            Ofrecemos una amplia gama de productos para mascotas, desde alimentos y juguetes hasta accesorios
            y servicios de atención veterinaria. 
            Nuestro objetivo es cuidar de tus seres queridos de cuatro patas
            y brindarte la mejor experiencia de compra.
        </p>
        <br/><br/>
        <h2><b>Funciones Principales:</b></h2>
        <br/>
        <ul className="text-left"> 
            <li>Venta de alimentos para mascotas.</li>
            <li>Amplia selección de juguetes y accesorios.</li>
            <li>Servicios de atención veterinaria.</li>
            <li>Registro de usuarios para una experiencia personalizada.</li>
            <li>Posibilidad de crear tu propia tienda para vender productos.</li>
        </ul>
    </div>

    <footer className="footer text-center bg-dark">
        &copy; 2023 Omega Pet Shop. Todos los derechos reservados.
    </footer>

      </div>
  );

}

export default App;