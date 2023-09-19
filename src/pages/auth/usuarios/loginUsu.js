import React, {Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import NavLogin from "../index/NavLogin";
import Footer from "../index/Footer";

const cookies = new Cookies();

class LoginUsu extends Component {

  state={
    form:{
      email: '',
      password: ''
    }
  }

  handleChange=async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  iniciarSesion=async()=>{
    await axios.get("http://localhost:5000/usuario", {params: {email: this.state.form.email, password: this.state.form.password}})
    .then(response=>{
      return response.data;
    })
    .then(response=>{
      if(response.length>0){
        var respuesta = response[0];
        cookies.set('id', respuesta.id, {path: "/"});
        cookies.set('tipodoc', respuesta.tipodoc, {path: "/"});
        cookies.set('numdoc', respuesta.numdoc, {path: "/"});
        cookies.set('nombre', respuesta.nombre, {path: "/"});
        cookies.set('apellido', respuesta.apellido, {path: "/"});
        cookies.set('direccion', respuesta.direccion, {path: "/"});
        cookies.set('email', respuesta.password, {path: "/"});
        window.location.href='./menuUsu';
        alert(`Bienvenido a Omega Pet Shop ${respuesta.nombre} ${respuesta.apellido}`);
      }else{
        alert("El usuario o la contraseña no son correctos")
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  componentDidMount() { 
    if (cookies.get("email")){      
      window.location.href='/menuUsu';
    }
   }

  render(){

    return ( 

      <div>

    <NavLogin></NavLogin>

    <div className="hold-transition login-page">
        <div className="login-box">
  <div className="login-logo">
    <Link to={"#"}>Inicio de Sesión <b>Usuarios</b></Link>
  </div>
  
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Ingrese sus credenciales</p>

      
        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Correo electronico" 
          name="email"
          onChange={this.handleChange}
          />
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
          name="password"
          onChange={this.handleChange}
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        


      <div className="social-auth-links text-center mb-3">
        
        <button className="btn btn-block btn-dark"
                onClick={()=> this.iniciarSesion()}>
          <i/> Ingresar
        </button>
        
      </div>

    </div>
    
  </div>
</div>

</div>
<br/><br/><br/><br/>

<Footer></Footer>
    </div> 
    );
}
}
 
export default LoginUsu;