import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import RoomForm from '../componentes/RoomForm'

function Navigate() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomId' element={<RoomForm />} />
    </Routes>
  )
}

export default Navigate