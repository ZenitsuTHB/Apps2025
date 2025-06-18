import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomId' element={<Home />} />
    </Routes>
  )
}

export default Router