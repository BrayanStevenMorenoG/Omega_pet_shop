import './App.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';
import NavUsu from '../index/NavUsu';
import Footer from '../index/Footer';

function MenuUsu() {

  const cookies = new Cookies();
  const navigate = useNavigate();

  const [tiendaData, setTiendaData] = useState([]);
  const [productosPorTienda, setProductosPorTienda] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/tienda')
      .then(res => {
        setTiendaData(res.data);
      });

    axios.get('http://localhost:5000/productos')
      .then(res => {
        const productos = res.data;

        const productosAgrupados = {};
        productos.forEach(producto => {
          const tiendaId = producto.tienda.toString();
          if (!productosAgrupados[tiendaId]) {
            productosAgrupados[tiendaId] = [];
          }
          productosAgrupados[tiendaId].push(producto);
        });

        setProductosPorTienda(productosAgrupados);
      });
  }, []);

  function selectProduct(product) {
    cookies.set('idpro', product.id, { path: "/" });
    cookies.set('producto', product.producto, { path: "/" });
    cookies.set('precio', product.precio, { path: "/" });
    cookies.set('tienda', product.tienda, { path: "/" });
    cookies.set('descripcion', product.descripcion, { path: "/" });
    navigate("/createPedi");
  }  


  console.log('id: '+ cookies.get('id'));
  console.log('tipodoc: '+ cookies.get('tipodoc'));
  console.log('numdoc: '+ cookies.get('numdoc'));
  console.log('nombre: '+ cookies.get('nombre'));
  console.log('apellido: '+ cookies.get('apellido'));
  console.log('direccion: '+ cookies.get('direccion'));
  console.log('email: '+ cookies.get('email'));

  useEffect(() =>{ 
    if (!cookies.get("id")){      
      window.location.href='/';
      alert("No ha iniciado sesión como usuario")
    }
  })

  return (
    <div>

    <NavUsu></NavUsu>

      <div className="container mt-4 p-3 text-center bg-light border rounded">
        <h1><b>Bienvenido {cookies.get('nombre')} {cookies.get('apellido')} a Omega Pet Shop</b></h1>
        <br />
        <p>
          Elige el producto que buscas para tu compañero peludo de tu tienda preferida
        </p>
        <br />
      </div>

      <div className="container mt-4">
  {Object.keys(productosPorTienda).map((tiendaId) => (
    <div key={tiendaId} className="mb-4">
      <div className="bg-dark p-2 text-center rounded-top">
        <h3 className="mb-2">
          <b>{tiendaData.find((tienda) => tienda.id === parseInt(tiendaId)).nombre}</b>
        </h3>
      </div>
      <div className="row p-3 bg-light rounded-bottom">
        {productosPorTienda[tiendaId].map((producto) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={producto.id}>
            <div className="product-card p-3 border rounded">
              <h5 className="mb-2">
                <b>{producto.producto}</b>
              </h5>
              <p className="mb-2"><strong>Descripción:</strong> {producto.descripcion}</p>
              <p className="mb-2"><strong>Precio:</strong> ${producto.precio}</p>
              <div className="text-center">
                <button
                  className="btn btn-dark"
                  onClick={() => selectProduct(producto)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


<br/><br/><br/>

          <Footer></Footer>

    </div>
  );
}

export default MenuUsu;
