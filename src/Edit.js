import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const {id} = useParams();

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:5000/user/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:5000/user/'+id, data)
        .then(res => {
            alert("Información actualizada!")
            navigate('/')
        })
    }

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='tipodoc'>id</label>
                <input type='text' disabled name='tipodoc' value={data.id} className='form-control'
                />
            </div>
            <div>
                <label htmlFor='tipodoc'>Tipo Documento</label>
                <input type='text' name='tipodoc' value={data.tipodoc} className='form-control'
                onChange={e => setData({...data, tipodoc: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='numdoc'>Numero Documento</label>
                <input type='text' name='numdoc' value={data.numdoc} className='form-control'
                onChange={e => setData({...data, numdoc: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' value={data.nombre} className='form-control'
                onChange={e => setData({...data, nombre: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' name='apellido' value={data.apellido} className='form-control'
                onChange={e => setData({...data, apellido: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='fnacimiento'>Fecha Nacimiento</label>
                <input type='text' name='fnacimiento' value={data.fnacimiento} className='form-control'
                onChange={e => setData({...data, fnacimiento: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' value={data.email} className='form-control'
                onChange={e => setData({...data, email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' value={data.password} className='form-control'
                onChange={e => setData({...data, password: e.target.value})}/>
            </div>
            <br></br>
            <button className='btn btn-info'>Actualizar</button>
            </form>
        </div>
    </div>
  )
}

export default Edit