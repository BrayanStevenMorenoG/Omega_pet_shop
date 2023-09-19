import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavLogin from '../index/NavLogin'
import Footer from '../index/Footer'

function AddTien() {
    const [inputData, setImputData] = useState ({nombre:'',direccion:'',telefono:'',propietario:'',password:''})

    const navigat = useNavigate();

    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:5000/tienda', inputData)
        .then(res => {
            alert("Registro guardado correctamente");
            navigat('/');
        }).catch(err => console.log(err));
    }

  return (

    <div>
      <NavLogin></NavLogin>
      <br/><br/>
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
        <h1>Crear cuenta de tienda</h1>
            <br/>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='nombre'>Nombre de la tienda</label>
                <input type='text' name='nombre' className='form-control'
                onChange={e=>setImputData({...inputData, nombre: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='direccion'>Direccion</label>
                <input type='text' name='direccion' className='form-control'
                onChange={e=>setImputData({...inputData, direccion: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='propietario'>Propietario</label>
                <input type='text' name='propietario' className='form-control'
                onChange={e=>setImputData({...inputData, propietario: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='password'>Contraseña</label>
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

export default AddTien