import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from '../pages/Create';
import Read from '../pages/Read';
import Delete from '../pages/Delete';
import Crud from '../pages/Crud';
import Layout from '../componentes/Layout';
//import Login from '../pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*<Route path='/' element={<Home />} />*/}
          {/*<Route path="/login" element={<Login />} />*/}
          <Route path='/crud' element={<Crud />} />
          <Route path='/read' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
