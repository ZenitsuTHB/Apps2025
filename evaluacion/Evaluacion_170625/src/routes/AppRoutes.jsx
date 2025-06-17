import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Derrota from '../pages/Derrota'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/laderrota' element={< Derrota />} />
      <Route path='/about' element={< About />} />
    </Routes>
  );
}

export default AppRoutes
