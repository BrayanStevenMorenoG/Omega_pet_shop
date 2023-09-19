import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/auth/login";
// import Crearcuenta from './pages/auth/crearcuenta';

function ListTien() {
  const [columns, setColumns] = useState ([])
  const [records, setRecords] = useState ([]) 
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:5000/tienda')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  return (

  <div className='container mt-5'>

    <div className='text-end'><Link to="/createTien" className='btn btn-primary'>Crear</Link></div>

    <br></br>

    <table className='table table-bordered'>
    <thead className='thead-dark'>
      <tr>
      {columns.map((c, i) => (

        <th key={i}>{c}</th>
 
      ))}

        <th colspan="2">Acciones</th>

      </tr> 
    </thead>
    <tbody>
        {
          records.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.nombre}</td>
              <td>{d.direccion}</td>
              <td>{d.telefono}</td>
              <td>{d.propietario}</td>
              <td className="text-center">
                <Link to={`/updateTien/${d.id}`} className='btn btn-sm btn-success'>Actualizar</Link>
              </td>
              <td className="text-center">
              <button onClick={e=> handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Borrar</button>
              </td>
            </tr>
          ))
        }
    </tbody>
    </table>
  </div>
  );

  function handleSubmit(id){
    const conf = window.confirm("Desea eliminar el registro?")
    if(conf){
      axios.delete('http://localhost:5000/usuario/'+id)
      .then(res=> {
        alert("Registro eliminado")
        navigate('/listTien')
      }).catch(err => console.log(err))
    }
  }

}

export default ListTien;