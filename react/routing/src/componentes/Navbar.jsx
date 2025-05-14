import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/pagina1'}>Página 1</NavLink>
        <NavLink to={'/pagina2'}>Página 2</NavLink>
        <NavLink to={'/pagina3/10'}>Página 3</NavLink>
        <NavLink to={'/pagina4'}>Página 4</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
