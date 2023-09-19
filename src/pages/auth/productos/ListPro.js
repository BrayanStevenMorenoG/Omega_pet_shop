import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavTien from '../index/NavTien';
import Footer from '../index/Footer';

function ListPro() {
  const cookies = new Cookies();

  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  const [columns2, setColumns2] = useState([]);
  const [records2, setRecords2] = useState([]);

  const navigate = useNavigate();

  const tiendaId = cookies.get('id');

  useEffect(() => {

    // Obtener productos de la tienda
    axios.get('http://localhost:5000/productos')
      .then(res => {
        const productosTienda = res.data.filter(producto => producto.tienda === tiendaId);
        setColumns(Object.keys(productosTienda[0] || {}));
        setRecords(productosTienda);
      })
      .catch(err => console.error(err));

    // Obtener pedidos de la tienda
    axios.get('http://localhost:5000/pedido')
      .then(res => {
        const pedidosTienda = res.data.filter(pedido => pedido.tienda === tiendaId);
        setColumns2(Object.keys(pedidosTienda[0] || {}));
        setRecords2(pedidosTienda);
      })
      .catch(err => console.error(err));
  }, []);


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

    <NavTien></NavTien>
    <br/><br/>
      <div className='container mt-5'>
        <div className="container mt-4 text-center">
          <h1>Tus productos</h1>
        </div>

        <div className='text-end'><Link to="/createro" className='btn btn-primary'>Crear</Link></div>

        <br></br>

        <table className='table table-bordered '>
          <thead className='thead-dark'>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th colSpan="2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.producto}</td>
                <td>{d.descripcion}</td>
                <td>{d.precio}</td>
                <td>{d.tienda}</td>
                <td>{d.id}</td>
                <td className="text-center">
                  <Link to={`/updatePro/${d.id}`} className='btn btn-sm btn-success'>Actualizar</Link>
                </td>
                <td className="text-center">
                  <button onClick={e => handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>

      <br/><br/><br/><br/>

      <Footer></Footer>
      
    </div>
  );

  function handleSubmit(id) {
    const conf = window.confirm("Desea eliminar el registro?");
    if (conf) {
      axios.delete('http://localhost:5000/productos/' + id)
        .then(res => {
          alert("Registro eliminado");
          navigate('/listPro');
        })
        .catch(err => console.error(err));
    }
  }
}

export default ListPro;
