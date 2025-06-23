import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import RoomForm from '../componentes/RoomForm'
import Game from '../pages/Game'

function Navigate() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/room/:roomId' element={<RoomForm />} />
    </Routes>
  )
}

export default Navigate