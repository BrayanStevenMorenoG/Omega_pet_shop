import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// Index
import App from './App'
// Usuario
import ListUsu from './pages/auth/usuarios/ListUsu';
import AddUsu from './pages/auth/usuarios/AddUsu';
import EditUsu from './pages/auth/usuarios/EditUsu';
import LoginUsu from './pages/auth/usuarios/loginUsu';
// Tienda
import ListTien from './pages/auth/tienda/ListTien';
import LoginTien from './pages/auth/tienda/LoginTien';
//Navegacion principal
import MenuUsu from './pages/auth/usuarios/MenuUsu';
import AddTien from './pages/auth/tienda/AddTien';
// Pedidos
import AddPedi from './pages/auth/pedido/AddPedi';
// Productos
import ListPro from './pages/auth/productos/ListPro';
import AddPro from './pages/auth/productos/AddPro';
import EditPro from './pages/auth/productos/EditPro';

function AppRouter() {
  return (
     <BrowserRouter>
        <Routes>
          {/* Index */}
          <Route path='/' element={<App/>}/>
          {/* Usuario */}
          <Route path='/listUsu' element={<ListUsu/>}/>
          <Route path='/createUsu' element={<AddUsu/>}/>
          <Route path='/updateUsu/:id' element={<EditUsu/>}/>
          <Route path='/deleteUsu' element={<AddUsu/>}/>
          <Route path='/loginUsu' element={<LoginUsu/>}/>
          {/* Tienda */}
          <Route path='/listTien' element={<ListTien/>}/>
          <Route path='/loginTien' element={<LoginTien/>}/>
          <Route path='/createTien' element={<AddTien/>}/>
          {/* Pagina */}
          <Route path='/menuUsu' element={<MenuUsu/>}/>
          {/* Pedido */}
          <Route path='/createPedi' element={<AddPedi/>}/>
          {/* Productos */}
          <Route path='/listPro' element={<ListPro/>}/>
          <Route path='/createro' element={<AddPro/>}/>
          <Route path='/updatePro/:id' element={<EditPro/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter