import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import NavLogin from "../index/NavLogin";
import Footer from "../index/Footer";

const cookies = new Cookies();


  console.log('id: '+ cookies.get('id'));
  console.log('nombreTien: '+ cookies.get('nombreTien'));
  console.log('direccion: '+ cookies.get('direccion'));
  console.log('telefono: '+ cookies.get('telefono'));
  console.log('propietario: '+ cookies.get('propietario'));

class LoginTien extends Component {

  state={
    form:{
      id: '',
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
    await axios.get("http://localhost:5000/tienda", {params: {nombre: this.state.form.nombre, password: this.state.form.password}})
    .then(response=>{
      return response.data;
    })
    .then(response=>{
      if(response.length>0){
        var respuesta = response[0];
        cookies.set('id', respuesta.id, {path: "/"});
        cookies.set('nombreTien', respuesta.nombre, {path: "/"});
        cookies.set('direccion', respuesta.direccion, {path: "/"});
        cookies.set('telefono', respuesta.telefono, {path: "/"});
        cookies.set('propietario', respuesta.propietario, {path: "/"});
        window.location.href='./listPro';
        alert(`Bienvenido a Omega Pet Shop ${respuesta.nombre}`);
      }else{
        alert("El nombre o la contraseña no son correctos")
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  componentDidMount() { 
    if (cookies.get("nombreTien")){      
      window.location.href='/listPro';
    }
   }

  render(){

    return ( 

      <div>

      <NavLogin></NavLogin>

    <div className="hold-transition login-page">
        <div className="login-box">
  <div className="login-logo">
  <Link to={"#"}>Inicio de Sesión <b>Tiendas</b></Link>
  </div>
  
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>

      
        <div className="input-group mb-3">
          <input type="nombre" 
          className="form-control" 
          placeholder="Nombre" 
          name="nombre"
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
 
export default LoginTien;