import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return ( 
    <div class="hold-transition login-page">
        <div className="login-box">
  <div className="login-logo">
    <Link to={"#"}><b>Inicio de </b>Sesión</Link>
  </div>
  
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>

      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Correo electronico" 
          name="email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Contraseña" 
          name="password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        


      <div className="social-auth-links text-center mb-3">
        
        <button type="submit" to={"#"} class="btn btn-block btn-primary">
          <i/> Ingresar
        </button>

        <Link to={"/crearcuenta"} class="btn btn-block btn-danger">
          <i/> Crear cuenta
        </Link>

        
      </div>

      </form>
    </div>
    
  </div>
</div>


    </div> 
    );
}
 
export default Login;