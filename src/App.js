import axios from 'axios';
import './App.css'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/auth/login";
// import Crearcuenta from './pages/auth/crearcuenta';


function App() {
  const [columns, setColumns] = useState ([])
  const [records, setRecords] = useState ([]) 
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:5000/user')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  return (

  <div className='container mt-5'>

    <div className='text-end'><Link to="/create" className='btn btn-primary'>Crear +</Link></div>

    <table className='table'>
    <thead>
      <tr>
      {columns.map((c, i) => (

        <th key={i}>{c}</th>
 
      ))}

        <th>Acciones</th>

      </tr> 
    </thead>
    <tbody>
        {
          records.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.tipodoc}</td>
              <td>{d.numdoc}</td>
              <td>{d.nombre}</td>
              <td>{d.apellido}</td>
              <td>{d.fnacimiento}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>
                <Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Actualizar</Link>
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
      axios.delete('http://localhost:5000/user/'+id)
      .then(res=> {
        alert("Registro eliminado")
        navigate('/')
      }).catch(err => console.log(err))
    }
  }

}

export default App;