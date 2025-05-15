import React from 'react'
import { NavLink } from 'react-router-dom'
import micros from './Micros'

function Navigate() {
  return (
    <nav>
      {/*<NavLink to={'/'}>Inicio</NavLink>
      <NavLink to={'/dragon'}>Dragon</NavLink>
      <NavLink to={'/newbrain'}>NewBrain</NavLink>
      <NavLink to={'/oric'}>Oric</NavLink>
      <NavLink to={'/spectrum'}>Spectrum</NavLink>
      <NavLink to={'/toshiba'}>Toshiba</NavLink>
      <NavLink to={'/zx81'}>ZX81</NavLink>*/}
      <NavLink to={'/'}>Inicio</NavLink>

      {
        micros.map((micro) => <NavLink key={micro.id} to={`/micro/${micro.micro}`}>{micro.micro}</NavLink>)
      }
    </nav>
  )
}

export default Navigate