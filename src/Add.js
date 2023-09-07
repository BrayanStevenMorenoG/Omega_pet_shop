import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [inputData, setImputData] = useState ({tipodoc:'',numdoc:'',nombre:'',apellido:'',fnacimiento:'',email:'',password:''})

    const navigat = useNavigate();

    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:5000/user', inputData)
        .then(res => {
            alert("Registro guardado correctamente");
            navigat('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
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
                <label htmlFor='fnacimiento'>Fecha Nacimiento</label>
                <input type='text' name='fnacimiento' className='form-control'
                onChange={e=>setImputData({...inputData, fnacimiento: e.target.value})}/>
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
            <button className='btn btn-info'>Guardar</button>
            </form>
        </div>
    </div>
  )
}

export default Add