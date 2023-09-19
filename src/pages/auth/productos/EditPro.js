import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavPro from '../index/NavPro';
import Footer from '../index/Footer';

function EditPro() {

    const cookies = new Cookies();

    const {id} = useParams();

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:5000/productos/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:5000/productos/'+id, data)
        .then(res => {
            alert("Información actualizada!")
            navigate('/listPro')
        })
    }

    console.log('id: '+ cookies.get('id'));
    console.log('nombreTien: '+ cookies.get('nombreTien'));
    console.log('direccion: '+ cookies.get('direccion'));
    console.log('telefono: '+ cookies.get('telefono'));
    console.log('propietario: '+ cookies.get('propietario'));
  
    useEffect(() =>{ 
      if (!cookies.get("id")){      
        window.location.href='/';
        alert("No ha iniciado sesión como tienda")
      }
    })

  return (

    <div>

    <NavPro></NavPro>

    <br/><br/>

    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id'>id</label>
                <input type='text' disabled name='id' value={data.id} className='form-control'
                />
            </div>
            <div>
                <label htmlFor='producto'>Nombre</label>
                <input type='text' name='producto' value={data.producto} className='form-control'
                onChange={e=>setData({...data, producto: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='descripcion'>Descripción</label>
                <input type='text' name='descripcion' value={data.descripcion} className='form-control'
                onChange={e=>setData({...data, descripcion: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='precio'>Precio</label>
                <input type='text' name='precio' value={data.precio} className='form-control'
                onChange={e=>setData({...data, precio: e.target.value})}/>
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

export default EditPro