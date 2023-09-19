import axios from 'axios'
import Cookies   from 'universal-cookie/es6';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import NavPedi from '../index/NavPedi';
import Footer from '../index/Footer';

function AddPedi() {

    const cookies = new Cookies();

    const navigate = useNavigate()

    const [inputData] = useState ({cliente:'',producto:'',direccion:'',total:''})

    const navigat = useNavigate();

    function handleSubmit(event){
        event.preventDefault()

        const dataWithClientId = {
            
            ...inputData,
            cliente: cookies.get('id'),
            producto: cookies.get('idpro'),
            direccion: cookies.get('direccion'),
            total: cookies.get('precio')
        }

        axios.post('http://localhost:5000/pedido', dataWithClientId)
        .then(res => {
            alert("Compra exitosa");
            navigat('/menuUsu');
        }).catch(err => console.log(err));
    }

// Traer datos del usuario

console.log('id: '+ cookies.get('id'));
console.log('tipodoc: '+ cookies.get('tipodoc'));
console.log('numdoc: '+ cookies.get('numdoc'));
console.log('nombre: '+ cookies.get('nombre'));
console.log('apellido: '+ cookies.get('apellido'));
console.log('direccion: '+ cookies.get('direccion'));
console.log('email: '+ cookies.get('email'));

// 

useEffect(() => {
    if (!cookies.get('id')) {
        alert("No ha iniciado sesión como usuario");
        navigate("/");
    }
  }, []);

  return (

    <div>

    <NavPedi></NavPedi>

<br></br>

    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>

            <h3>Verifica tus datos antes de comprar</h3>
            <br/>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='cliente'>Cliente</label>
                <input
                type='text'
                name='cliente'
                className='form-control'
                placeholder={cookies.get('nombre')+" "+ cookies.get('apellido')}
                readOnly/>
            </div>
            <div>
                <label htmlFor='producto'>Producto</label>
                <input type='text' name='producto' className='form-control'
                placeholder={cookies.get('producto')}
                readOnly/>
            </div>
            <div>
                <label htmlFor='direccion'>Dirección</label>
                <input type='text' name='direccion' className='form-control'
                placeholder={cookies.get('direccion')}
                readOnly/>
            </div>
            <div>
                <label htmlFor='total'>Total</label>
                <input type='text' name='total' className='form-control'
                placeholder={cookies.get('precio')}
                readOnly/>
            </div>
            <input
                type='hidden'
                name='cliente'
                value={cookies.get('id')} // Obtener la ID del cliente desde las cookies
            />
            <input // Campo oculto id usuario
                type='hidden'
                name='direccion'
                value={cookies.get('direccion')} // Obtener la ID del cliente desde las cookies
            />
            <input // Campo oculto id usuario
                type='hidden'
                name='producto'
                value={cookies.get('idpro')} // Obtener la ID del cliente desde las cookies
            />
            <input // Campo oculto id usuario
                type='hidden'
                name='total'
                value={cookies.get('precio')} // Obtener la ID del cliente desde las cookies
            />
            <br></br>
            <button className='btn btn-dark'>Comprar</button>
            </form>
        </div>
    </div>

    <br/><br/><br/><br/>

    <Footer></Footer>

    </div>
  )
}

export default AddPedi