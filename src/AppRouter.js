import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import App from './App';
import Add from './Add';
import Edit from './Edit';

function AppRouter() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/create' element={<Add/>}/>
          <Route path='/update/:id' element={<Edit/>}/>
          <Route path='/delete' element={<Add/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter