import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavLogin from '../index/NavLogin'
import Footer from '../index/Footer'
import Cookies from 'universal-cookie'

function AddUsu() {
    const [inputData, setImputData] = useState ({tipodoc:'',numdoc:'',nombre:'',apellido:'',direccion:'',email:'',password:''})

    const navigat = useNavigate();

    const cookies = new Cookies();

    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:5000/usuario', inputData)
        .then(res => {
            alert("Registro guardado correctamente");
            navigat('/');
        }).catch(err => console.log(err));
    }

    useEffect(() =>{ 
        if (cookies.get("nombre")){
          window.location.href='/menuUsu';
        } else if (cookies.get("nombreTien")){
            window.location.href='/menuTien';
          }
       })

  return (

    <div>

    <NavLogin></NavLogin>

    <br/><br/>

    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <h1>Crear cuenta de usuario</h1>
            <br/>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='tipodoc'>Tipo Documento</label>
                <input type='text' name='tipodoc' className='form-control'
                onChange={e=>setImputData({...inputData, tipodoc: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='numdoc'>Numero Documento</label>
                <input type='text' name='numdoc' className='form-control'
                onChange={e=>setImputData({...inputData, numdoc: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' className='form-control'
                onChange={e=>setImputData({...inputData, nombre: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' name='apellido' className='form-control'
                onChange={e=>setImputData({...inputData, apellido: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='direccion'>Direccion</label>
                <input type='text' name='direccion' className='form-control'
                onChange={e=>setImputData({...inputData, direccion: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='form-control'
                onChange={e=>setImputData({...inputData, email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' className='form-control'
                onChange={e=>setImputData({...inputData, password: e.target.value})}/>
            </div>
            <br></br>
            <button className='btn btn-dark'>Guardar</button>
            </form>
        </div>
        </div>

        <br/><br/><br/><br/>

        <Footer></Footer>

    </div>
  )
}

export default AddUsu