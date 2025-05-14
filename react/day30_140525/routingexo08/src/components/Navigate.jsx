import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigate() {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/dragon'}>Dragon</NavLink>
        <NavLink to={'/newbrain'}>NewBrain</NavLink>
        <NavLink to={'/oric'}>Oric</NavLink>
        <NavLink to={'/spectrum'}>Spectrum/</NavLink>
        <NavLink to={'/toshiba'}>Toshiba</NavLink>
        <NavLink to={'/zx81'}>ZX81</NavLink>
      </nav>
    </div>
  )
}

export default Navigate