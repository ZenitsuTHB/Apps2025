import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (

  <>
    <h1>Hospital Exercise</h1>
    <nav>
      <NavLink to='/' exact='true' >Inicio</NavLink>
      <NavLink to='/about' >Acerca de</NavLink>
    </nav>
  </>
);

export default Header
