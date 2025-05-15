import React from 'react'
import { NavLink } from 'react-router-dom'
import micros from '../datos/micros'

function Navbar() {
  return (
    <nav>
      <NavLink to={'/'}>Inicio</NavLink>
      {
        micros.map((micro, indice) => <NavLink key={indice} to={`/micro/${micro.micro}`}>{micro.micro}</NavLink>)
      }
    </nav>
  )
}

export default Navbar
