import React from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'

function Contenido() {
  return (
    <>
      <h1>Nombre curso</h1>
      <h2>Disponibilidad</h2>
      <div className='botones'>
        <button>Profesora</button>
        <button>Lugar</button>
      </div>
      <Profesora />
      <Ubicacion />
    </>

  )
}

export default Contenido
