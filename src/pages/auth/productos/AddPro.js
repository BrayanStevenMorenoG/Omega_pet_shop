import axios from 'axios'
import Cookies   from 'universal-cookie/es6';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavPro from '../index/NavPro';
import Footer from '../index/Footer';

function AddPro() {

    const [inputData, setImputData] = useState ({producto:'',descripcion:'',precio:'',tienda:''})

    const navigat = useNavigate();
    const cookies = new Cookies();

    function handleSubmit(event){
        event.preventDefault()

        const dataWithClientId = {
            ...inputData,
            tienda: cookies.get('id')
        }

        axios.post('http://localhost:5000/productos', dataWithClientId)
        .then(res => {
            alert("Producto guardado correctamente");
            navigat('/listPro');
        }).catch(err => console.log(err));
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

          <br></br>

    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='producto'>Nombre</label>
                <input type='text' name='producto' className='form-control'
                onChange={e=>setImputData({...inputData, producto: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='descripcion'>Descripción</label>
                <input type='text' name='descripcion' className='form-control'
                onChange={e=>setImputData({...inputData, descripcion: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='precio'>Precio</label>
                <input type='text' name='precio' className='form-control'
                onChange={e=>setImputData({...inputData, precio: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='tienda'>Tienda</label>
                <input type='text' name='tienda' className='form-control'
                placeholder={cookies.get('nombre')}
                />
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

export default AddPro