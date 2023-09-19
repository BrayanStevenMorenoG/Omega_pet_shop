import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../index/NavUsu';


function ListUsu() {
  const [columns, setColumns] = useState ([])
  const [records, setRecords] = useState ([]) 
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:5000/usuario')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  return (

    <div>

    <Nav></Nav>

  <div className='container mt-5'>

    <div className='text-end'><Link to="/createUsu" className='btn btn-primary'>Crear</Link></div>

    <br></br>

    <table className='table table-bordered'>
    <thead className='thead-dark'>
      <tr>
      {columns.map((c, i) => (

        <th key={i}>{c}</th>
 
      ))}

        <th colSpan="2">Acciones</th>

      </tr> 
    </thead>
    <tbody>
        {
          records.map((d,i)=>(
            <tr key={i}>
              <td>{d.tipodoc}</td>
              <td>{d.numdoc}</td>
              <td>{d.nombre}</td>
              <td>{d.apellido}</td>
              <td>{d.direccion}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <th>{d.id}</th>
              <td className="text-center">
                <Link to={`/updateUsu/${d.id}`} className='btn btn-sm btn-success'>Actualizar</Link>
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
  </div>
  );

  function handleSubmit(id){
    const conf = window.confirm("Desea eliminar el registro?")
    if(conf){
      axios.delete('http://localhost:5000/usuario/'+id)
      .then(res=> {
        alert("Registro eliminado")
        navigate('/listUsu')
      }).catch(err => console.log(err))
    }
  }

}

export default ListUsu;